export class Item {
  constructor(
    public path: string,//URIComponent safe, delimited by '/'
    public title: string,
  ) { }
}