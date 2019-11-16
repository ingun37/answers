import { Component, OnInit, Input } from '@angular/core';
import { AnswerService, Item } from '../answer.service';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.sass']
})
export class MdComponent implements OnInit {
  @Input() item: Item;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
  }

}
