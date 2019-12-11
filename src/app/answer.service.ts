import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FireService } from './fire.service';
import { MarkdownService } from 'ngx-markdown';
import { Item } from './item';
import { Account } from './account';
import * as firebase from 'firebase/app';
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
    if (snap.exists) {
      const data = snap.data();
      return new Item(snap.ref.path, getSafe(() => data.author, null), getSafe(() => data.cover, null), data.title);
    } else {
      console.log('failed to get data from :' + snap.ref.path);
      return null;
    }
  }

  private makeChain(startId: string, accountRefs: AccountRef[]): AccountRef[] {
    const dic = new Map<string, AccountRef>(accountRefs.map(x => [x.id, x]));
    const current = dic.get(startId);
    const chain = [current];
    while (chain[chain.length - 1].account.parent) {
      chain.push(dic.get(chain[chain.length - 1].account.parent));
    }
    return chain;
  }

  getAccountsOfItem(path: string, attr: string): Promise<AccountRef[]> {
    return this.accountsOf(path, attr).get().then(snap => {
      const accountRefs = snap.docs.map(doc => {
        return new AccountRef(doc.id, Object.assign(new Account('','',''), doc.data()));
      });
      
      const ids = accountRefs.map(x => x.id);
      const parentIds = new Set(accountRefs.map(x => x.account.parent));
      const leafs = ids.filter(x => !parentIds.has(x));
      
      const chains = leafs.map(x => this.makeChain(x, accountRefs));
      if (chains.length > 1) {
        return chains.reduce((prev, curr) => prev.length < curr.length ? curr : prev);
      } else if (chains.length === 1) {
        return chains[0];
      } else {
        return [];
      }
    });
  }

  getItem(path: string): Promise<Item> {
    return this.fire.db.doc(path).get().then(snap => {
      return this.snap2Item(snap);
    });
  }

  newItem(parentPath: string, title: string): Promise<void> {
    return this.fire.db.doc(parentPath + '/subs/' + encodeURIComponent(title)).set({
      title,
      author: this.fire.loginState.value.uid
    }).catch(reason => {
      console.log(reason);
    });
  }

  deleteItem(path: string): Promise<void> {
    return this.fire.db.doc(path).delete();
  }
  private accountsOf(path: string, attr: string): firebase.firestore.CollectionReference {
    return this.fire.db.collection(path + '/attributes/' + encodeURIComponent(attr) + '/accounts');
  }

  newAccount(path: string, attr: string, account: Account): Promise<void> {
    return this.accountsOf(path, attr).add(Object.assign({}, account)).then(ref => {
      return Promise.resolve();
    });
  }
  // mergeToItem(path: string, data: any): Promise<void> {
  //   return this.fire.db.doc(path).set(data, {merge: true});
  // }
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
export class AccountRef {
  constructor(
    public id: string,
    public account: Account
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

export enum ItemAttribute {
  QUESTION = 'question',
  ANSWER = 'answer'
}

function getSafe(fn, defaultVal) {
  try {
      return fn();
  } catch (e) {
      return defaultVal;
  }
}