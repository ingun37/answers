import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticDBService {
  rootSha = '2aed5404c83f7a46aa249e0a6328af756b19d513';
  private getJson(sha: string): Promise<_Node> {
    return this.http.get('assets/db/' + sha + '.json').toPromise().then(obj => {
      const instance: _Node = Object.assign(new _Node(), obj);
      return instance;
    });
  }
  getHome(): Promise<_Node> {
    return this.getJson(this.rootSha);
  }
  getItem(sha: string): Promise<_Node> {
    return this.getJson(sha);
  }
  constructor(private http: HttpClient) { }
}

export class _Item {
  public title: string;
  public sha1: string;
  public attr: Map<string, string>;
}
export class _Node {
  public path: string;
  public item: _Item;
  public kids: _Item[];
}
