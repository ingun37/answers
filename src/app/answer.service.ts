import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  getItem(itemId) {
    return {
      title: 'fuck'
    };
  }
  constructor() { }
}
