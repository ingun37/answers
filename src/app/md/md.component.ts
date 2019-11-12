import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.sass']
})
export class MdComponent implements OnInit {
  @Input() item;
  questionMD;
  answerMD;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    if (this.item.hasOwnProperty('questionId')) {
      this.questionMD = this.answerService.getMDContent(this.item.questionId);
    }
    if (this.item.hasOwnProperty('answerId')) {
      this.answerMD = this.answerService.getMDContent(this.item.answerId);
    }
  }

}
