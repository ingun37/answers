import { Component, OnInit, HostListener } from '@angular/core';
import { _Node, StaticDBService, _Item } from '../static-db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  home: _Node;
  cols = 4;
  makeURI(item: _Item): string {
    return 'books/' + item.sha1;
  }
  constructor(
    // private answerService: AnswerService,
    private db: StaticDBService
  ) { }

  authorOf(item: _Item): string {
    return item.attr['author'] || '';
  }
  ngOnInit() {
    this.db.getHome().then(home => this.home = home);
    // this.answerService.getHome().then(home => this.home = home);
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
