import { Component, OnInit } from '@angular/core';
import { Item, AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';

declare var katex: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  item: Item;
  questionHTML: SafeHtml;
  answerHTML: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private answers: AnswerService,
    private sanitizer: DomSanitizer,
    private markdownService: MarkdownService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      this.answers.getItem('books/' + bookId).then(item => {
        this.item = item;
        this.questionHTML = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, item.questionMD));
        this.answerHTML = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, item.answerMD));
      });
    });
  }

}

function md2HTML(mdservice: MarkdownService, mdStr: string): string {
  var displayTable = {};
  var table = {};
  const replacedMD = mdStr.replace(/\$\$(.+?)\$\$/gm, (match, group) => {
    const randomID = makeid(16);
    displayTable[randomID] = group;
    return randomID;
  }).replace(/\$(.+?)\$/g, (match, group) => {
    const randomID = makeid(16);
    table[randomID] = group;
    return randomID;
  });
  var html = mdservice.compile(replacedMD);
  for (const key in displayTable) {
    if (displayTable.hasOwnProperty(key)) {
      const tex = displayTable[key];
      html = html.replace(key, katex.renderToString(tex, {displayMode: true}));
    }
  }
  for (const key in table) {
    if (table.hasOwnProperty(key)) {
      const tex = table[key];
      html = html.replace(key, katex.renderToString(tex));
    }
  }
  return html;
}

function makeid(length) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}