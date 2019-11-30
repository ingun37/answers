import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { AnswerService, Item } from '../answer.service';
import { MarkdownService } from 'ngx-markdown';
import { MathService } from '../math.service';
import { Observable } from 'rxjs';

declare var MathJax: any;

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.sass']
})


export class MdComponent implements OnInit {
  @Input() item: Item;
  questionHTML: string;
  answerHTML: string;
  constructor(
    private answerService: AnswerService,
    private markdownService: MarkdownService,
    private sanitizer: DomSanitizer,
    private mathService: MathService
  ) { }


  ngOnInit() {
    this.questionHTML = latex(this.markdownService.compile(this.item.questionMD));
    this.answerHTML = this.markdownService.compile(this.item.answerMD);
    this.mathService.aaa(this.item.title);
  }

}

function latex(html: string): string {
  return html;
  // return html.replace(/\$(.+?)\$/g, (match, group) => MathJax.tex2chtml(group).outerHTML);
}