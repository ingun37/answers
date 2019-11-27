import { Component, OnInit, Input } from '@angular/core';
import { AnswerService, Item } from '../answer.service';
import * as markit from "markdown-it";

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
    this.questionHTML = this.markdownit.render(this.item.questionMD);
    this.answerHTML = this.markdownit.render(this.item.answerMD);
  }

}
