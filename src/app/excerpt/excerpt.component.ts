import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';

declare var katex: any;

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.sass']
})
export class ExcerptComponent implements OnInit {
  @Input() mdstr: string;
  
  htmlstr: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
    private markdownService: MarkdownService,
  ) { }

  ngOnInit() {
    if (this.mdstr) {
      this.htmlstr = this.sanitizer.bypassSecurityTrustHtml(md2HTML(this.markdownService, this.mdstr));
    }
  }

}

export function md2HTML(mdservice: MarkdownService, mdStr: string): string {
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

export enum ItemAttribute {
  QUESTION = 'question',
  ANSWER = 'answer'
}

function getSafe(fn, defaultVal) {
  try {
      return fn();
  } catch (e) {
      return defaultVal;
  }
}

