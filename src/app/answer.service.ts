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
    const f = map((m: Master) => m.commit.commit.tree.sha);
    return this.http.get<Master>(this.url + '/branches/master').pipe(f);
  }
  getItem(treeID: string) {
    const f = map((t: Tree) => {
      let v = {};
      for (let sub of t.tree) {
        addTreeToItem(v, sub.path.split('/'), sub);
      }
      console.log(v)
      return v;
    });
    const requesturl = this.url + '/git/trees/' + treeID + '?recursive=1';
    console.log(`requesturl : ${requesturl}`);
    return this.http.get<Tree>(requesturl).pipe(f);
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
class NestedTree {
  type: NestedType;
  path: string;
  sha: string;
}
class Tree {
  sha: string;
  tree: NestedTree[];
}

function addTreeToItem(item: any, pathElements: string[], tree: NestedTree) {
  const p = pathElements.shift();
  if (pathElements.length === 0) {
    switch (tree.type) {
      case NestedType.tree:
        if (!item.trees) {
          item.trees = {};
        }
        item.trees[p] = {
          id: tree.sha,
          title: p
        };
        break;
      case NestedType.blob:
        if (p === 'q.md') {
          item.questionId = tree.sha;
        } else if (p === 'a.md') {
          item.answerId = tree.sha;
        }
        break;
    }
  } else {
    if (!item.trees) {
      item.trees = {};
    }
    if (!item.trees[p]) {
      item.trees[p] = {};
    }
    addTreeToItem(item.trees[p], pathElements, tree);
  }
}
