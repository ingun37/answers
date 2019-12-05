export class Item {
    get title(): string {
      return this.data.title;
    }
    get questionMD(): string {
      return this.data.question;
    }
    get answerMD(): string {
      return this.data.answer;
    }
    constructor(
      public path: string,//URIComponent safe, delimited by '/'
      public data: any,
    ) {}
  }