export class Item {
  constructor(
    public path: string,//URIComponent safe, delimited by '/'
    public author: string,
    public cover: string,
    public title: string,
  ) { }
}