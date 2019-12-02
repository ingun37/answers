import { Component, OnInit, Input } from '@angular/core';
import { Item, AnswerService } from '../answer.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

declare var katex: any;

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  @Input() item: Item;
  children: Item[];
  unfolds = new Set<string>();
  questionHTML: SafeHtml;
  answerHTML: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private markdownService: MarkdownService,
    private answer: AnswerService
    ) { }

  ngOnInit() {
    this.questionHTML = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, this.item.questionMD));
    this.answerHTML = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, this.item.answerMD));
    this.answer.getChildren(this.item.path).then(children => {
      this.children = children;
    })
  }

  unfold(item: Item) {
    this.unfolds = this.unfolds.add(item.path);
    console.log('unfold:');
    console.log(item);
  }

  onChange(path: string, event: MatButtonToggleChange) {
    if (event.source.checked) {
      this.unfolds.add(path);
    } else {
      this.unfolds.delete(path);
    }
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