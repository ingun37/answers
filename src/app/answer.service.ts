import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  getItem(routes: string[]) {
    const name = ['root'].concat(routes).pop();
    return {
      title: name,
      subItems: [
        {
          title: `${name} 1`,
          subItems: [
            {
              title: `${name} 1 1`
            }
          ]
        }, {
          title: `${name} 2`
        }
      ]
    };
  }
  constructor() { }
}
