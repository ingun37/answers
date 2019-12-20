import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownService } from 'ngx-markdown';
import { Item } from './item';
import { Account } from './account';
import * as firebase from 'firebase/app';

declare var katex: any;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  rootSha1 = '2aed5404c83f7a46aa249e0a6328af756b19d513'
  
  
  
  
  
  constructor(
    private http: HttpClient,
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

