export class Item {
  constructor(
    public path: string,//URIComponent safe, delimited by '/'
    public author: string,
    public title: string,
  ) { }
}