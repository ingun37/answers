import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  getItem(routes: string[]) {
    const name = routes.join('.');
    return {
      title: name,
      subItems: [
        {
          title: `${name}-fuck 1`
        }, {
          title: `${name}-fuck 2`
        }
      ]
    };
  }
  constructor() { }
}
