import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  getRootId(): Promise<string> {
    return Promise.resolve('0');
  }

  getItem(treeID: string): Promise<Item> {
    return Promise.resolve(new Item(treeID, 't:' + treeID, 'question of ' + treeID, 'answer of' + treeID, [
      new Item(treeID + '-1', 't:' + treeID + '-1', 'question', 'answer', [])
    ]));
  }
  constructor(
    private http: HttpClient
  ) { }
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
