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

  private snap2Item(snap: firebase.firestore.DocumentSnapshot): Item {
    const data = snap.data();
    return new Item(snap.ref.path, data);
    // if (depth > 0) {
    //   return snap.ref.collection('subs').get().then(collectionSnap => {
    //     return Promise.all(collectionSnap.docs.map(x => this.snap2Item(depth - 1, x))).then(subItems => {
    //       return new Item(snap.ref.path, title, question, answer, subItems);
    //     });
    //   });
    // }
  }
  getItem(path: string): Promise<Item> {
    console.log('getting item at physical ' + path);
    return this.fire.db.doc(path).get().then(snap => {
      return this.snap2Item(snap);
    });
  }
  mergeToItem(path: string, data: any): Promise<void> {
    return this.fire.db.doc(path).set(data, {merge: true});
  }
  getChildren(path: string): Promise<Item[]> {
      return this.fire.db.collection(path + '/subs').get().then(collectionSnap => {
        return collectionSnap.docs.map(x => this.snap2Item(x));
      });
  }
  constructor(
    private http: HttpClient,
    private fire: FireService,
  ) {}
}

export class Item {
  get title(): string {
    return this.data.title;
  }
  get questionMD(): string {
    return this.data.question;
  }
  get answerMD(): string {
    return this.data.answer;
  }
  constructor(
    public path: string,//URIComponent safe, delimited by '/'
    public data: any,
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
