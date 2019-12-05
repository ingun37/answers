import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FireService } from './fire.service';
import { MarkdownService } from 'ngx-markdown';
import { Item } from './item';

declare var katex: any;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url = 'http://192.168.35.5:8000/';

  getHome(): Promise<Home> {
    return this.fire.db.collection('books').get().then(snap => {
      return new Home(snap.docs.map(x => this.snap2Item(x)));
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
  newItem(parentPath: string, title: string): Promise<void> {
    return this.fire.db.doc(parentPath + '/subs/' + encodeURIComponent(title)).set({
      title
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

export class Home {
  constructor(
    public books: Item[]
  ) {}
}

export function md2HTML(mdservice: MarkdownService, mdStr: string): string {
  var displayTable = {};
  var table = {};
  const replacedMD = mdStr.replace(/\$\$(.+?)\$\$/gm, (match, group) => {
    const randomID = makeid(16);
    displayTable[randomID] = group;
    return randomID;
  }).replace(/\$(.+?)\$/g, (match, group) => {
    const randomID = makeid(16);
    table[randomID] = group;
    return randomID;
  });
  var html = mdservice.compile(replacedMD);
  for (const key in displayTable) {
    if (displayTable.hasOwnProperty(key)) {
      const tex = displayTable[key];
      html = html.replace(key, katex.renderToString(tex, {displayMode: true}));
    }
  }
  for (const key in table) {
    if (table.hasOwnProperty(key)) {
      const tex = table[key];
      html = html.replace(key, katex.renderToString(tex));
    }
  }
  return html;
}

function makeid(length) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}