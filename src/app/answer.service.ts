import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url = 'https://ingun37.github.io/answers-json/';

  getHome(): Promise<Home> {
    return this.http.get<Home>(this.url).toPromise();
  }

  getItem(treeID: string): Promise<Item> {
    return this.http.get<Item>(this.url + treeID).toPromise();
  }
  constructor(
    private http: HttpClient
  ) {}
}

export class Item {
  constructor(
    public id: string,
    public title: string,
    public questionMD: string,
    public answerMD: string,
    public subs: Item[]
  ) {}
}

export class Book {
  constructor(
      public id: string,
      public title: string
  ) {}
}

export class Home {
  constructor(
      public rootId: string,
      public books: Book[]
  ) {}
}
