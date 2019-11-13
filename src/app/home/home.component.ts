import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';
import { mergeMap } from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  topItem;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.answerService.getRootId().pipe(mergeMap(rid => this.answerService.getItem(false, rid))).subscribe(topItem => {
      console.log(topItem)
      this.topItem = topItem;
    });
  }

}
