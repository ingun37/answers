import { Component, OnInit, Input } from '@angular/core';
import { AnswerService, Item } from '../answer.service';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.sass']
})
export class MdComponent implements OnInit {
  @Input() item: Item;
  questionMD: string;
  answerMD: string;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.questionMD = this.item.questionMD;
    this.answerMD = this.item.answerMD;
  }

}
