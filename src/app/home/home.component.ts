import { Component, OnInit } from '@angular/core';
import { AnswerService, Item, Home } from '../answer.service';
import { mergeMap } from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  home: Home;
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.answerService.getHome().then(home => this.home = home);
  }
}
