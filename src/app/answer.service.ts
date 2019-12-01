import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FireService } from './fire.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url = 'http://192.168.35.5:8000/';

  getHome(): Promise<Home> {
    return this.fire.db.collection('books').get().then(snap => {
      const entries = snap.docs.map(x => x.data().title as string).filter(x => x).map(x => new Book(x));
      console.log('book entries:');
      console.log(entries);
      return new Home(entries);
    });
  }

  private snap2Item(depth: number, snap: firebase.firestore.DocumentSnapshot): Promise<Item> {
    const data = snap.data();
    const title = data.title as string;
    const question = data.q as string;
    const answer = data.a as string;
    if (depth > 0) {
      return snap.ref.collection('subs').get().then(collectionSnap => {
        return Promise.all(collectionSnap.docs.map(x => this.snap2Item(depth - 1, x))).then(subItems => {
          return new Item(snap.ref.path, title, question, answer, subItems);
        });
      });
    }
    return Promise.resolve(new Item(snap.ref.path, title, question, answer, []));
  }
  getItem(path: string): Promise<Item> {
    console.log('getting item at physical ' + path);
    return this.fire.db.doc(path).get().then(snap => {
      return this.snap2Item(1, snap);
    });
  }
  constructor(
    private http: HttpClient,
    private fire: FireService,
  ) {}
}

export class Item {
  constructor(
    public path: string,//URIComponent safe, delimited by '/'
    public title: string,
    public questionMD: string,
    public answerMD: string,
    public subs: Item[]
  ) {}
}

export class Book {
  get path(): string {
    return encodeURIComponent(this.title);
  }
  constructor(
    public title: string
  ) {}
}

export class Home {
  constructor(
    public books: Book[]
  ) {}
}
