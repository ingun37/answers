import { Component, OnInit, Input } from '@angular/core';
import { AnswerService, Item } from '../answer.service';
import * as markit from 'markdown-it';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.sass']
})


export class MdComponent implements OnInit {
  @Input() item: Item;
  questionHTML: string;
  answerHTML: string;
  markdownit: markit;
  constructor(
    private answerService: AnswerService
  ) { }


  ngOnInit() {
    this.markdownit = new markit();
    const parser = new DOMParser();
    this.questionHTML = latex(parser, this.markdownit.render(this.item.questionMD));
    this.answerHTML = latex(parser, this.markdownit.render(this.item.answerMD));
  }

}

function latex(parser: DOMParser, htmlText: string): string {
  if (!htmlText) {
    return '';
  }
  const doc = parser.parseFromString(htmlText, 'text/html');
  const aaa = doc.getElementsByTagName('*');
  // tslint:disable-next-line: prefer-for-of
  for (let index = 0; index < aaa.length; index++) {
    const element = aaa[index];
    element.textContent = element.textContent.replace(/\$.+?\$/g, '  -math-  ');
  }
  console.log(doc.documentElement.outerHTML);
  return doc.documentElement.outerHTML;
}