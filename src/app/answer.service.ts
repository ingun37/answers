import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  url = 'https://api.github.com/repos/ingun37/answers-db';
  getMDContent(blobID: string) {
    return `
    MD Sample of ${blobID}
    `;
  }
  getRootId(): Observable<string> {
    // this.http.get(this.url + '/branches/master').subscribe(x=>{
    //   console.log(x);
    // });
    const f = map((m: Master) => m.commit.commit.tree.sha);
    return this.http.get<Master>(this.url + '/branches/master').pipe(f);
  }
  getItem(treeID: string) {
    const name = treeID.substr(0, 5);
    return {
      id: 'qqqqq',
      title: name,
      questionId: 'asdfff',
      answerId: 'fdsaaa',
      trees: {
        wwwww: {
          id: 'wwwww',
          title: `${name}_1`,
          questionId: 'qwerrr',
          answerId: 'rewqqq',
          trees: {
            iiiii: {
              id: 'iiiii',
              title: `${name}_1_1`,
              questionId: 'poiuuu',
            },
          }
        },
        ooooo: {
          id: 'ooooo',
          title: `${name}_2`,
          questionId: 'ZXCVvv',
          answerId: 'vcxzzz'
        },
      }
    };
  }
  constructor(
    private http: HttpClient
  ) { }
}
class Master {
  commit: {
    commit: {
      tree: {
        sha: string
      }
    }
  };
}

enum NestedType {
  tree = 'tree',
  blob = 'blob'
}
interface Tree {
  sha: string;
  tree: {
    type: NestedType,
    path: string,
    sha: string
  }[];
}

function buildMap(m: any, pathElements: string[], blobSha: string): {} {
  const p = pathElements.shift();
  if (pathElements.length == 0) {
    if (p === 'q.md') {
      m.questionId = blobSha;
      return m;
    } else if (p === 'a.md') {
      m.answerId = blobSha;
      return m;
    } else {
      return m;
    }
  }
  if (!m.hasOwnProperty(p)) {
    m[p] = {
      title: p
    };
  }
  m[p] = buildMap(m[p], pathElements, blobSha);
  
}