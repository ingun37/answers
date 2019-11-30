import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { AnswerService, Item } from '../answer.service';
import { MarkdownService } from 'ngx-markdown';
import { MathService } from '../math.service';
import { Observable } from 'rxjs';

declare var katex: any;

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.sass']
})


export class MdComponent implements OnInit {
  @Input() item: Item;
  questionHTML: SafeHtml;
  answerHTML: SafeHtml;
  constructor(
    private markdownService: MarkdownService,
    private sanitizer: DomSanitizer,
  ) { }


  ngOnInit() {
    this.questionHTML = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, this.item.questionMD));
    this.answerHTML = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, this.item.answerMD));
    console.log('md init');
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
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}