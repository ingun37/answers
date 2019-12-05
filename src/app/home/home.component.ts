import { Component, OnInit } from '@angular/core';
import { AnswerService, Home } from '../answer.service';
import { mergeMap } from "rxjs/operators";
import { Item } from '../item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  home: Home;
  makeURI(item: Item): string {
    return 'books/' + encodeURIComponent(item.path);
  }
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.answerService.getHome().then(home => this.home = home);
  }
}
