import { Component, OnInit } from '@angular/core';
import { AnswerService, Item } from '../answer.service';
import { mergeMap } from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  topItem: Item;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.answerService.getRootId().then(rid => this.answerService.getItem(rid)).then(item => {
      console.log(item.title);
      this.topItem = item;
    });
  }
}
