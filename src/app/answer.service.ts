import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  getMDContent(blobID: string) {
    return `
    MD Sample of ${blobID}
    `;
  }
  getRootId() {
    return 'rrrrr';
  }
  getItem(treeID: string) {
    const name = treeID.substr(0, 5);
    return {
      id: 'qqqqq',
      title: name,
      questionId: 'asdfff',
      answerId: 'fdsaaa',
      trees: [
        {
          id: 'wwwww',
          title: `${name}_1`,
          questionId: 'qwerrr',
          answerId: 'rewqqq',
          trees: [
            {
              id: 'iiiii',
              title: `${name}_1_1`,
              questionId: 'poiuuu',
              answerId: 'uioppp'
            },
          ]
        },
        {
          id: 'ooooo',
          title: `${name}_2`,
          questionId: 'ZXCVvv',
          answerId: 'vcxzzz'
        },
      ]
    };
  }
  constructor() { }
}
