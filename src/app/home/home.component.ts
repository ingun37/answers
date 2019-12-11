import { Component, OnInit, HostListener } from '@angular/core';
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
  cols = 4;
  makeURI(item: Item): string {
    return 'books/' + encodeURIComponent(item.path);
  }
  constructor(
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    this.answerService.getHome().then(home => this.home = home);
    const toCols = Math.min(Math.floor(window.innerWidth / 200), 4);
    if (toCols !== this.cols) {
      this.cols = toCols;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const toCols = Math.min(Math.floor(window.innerWidth / 200), 4);
    if (toCols !== this.cols) {
      this.cols = toCols;
    }
    console.log(this.cols);
  }
}
