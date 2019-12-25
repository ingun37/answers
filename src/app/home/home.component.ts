import { Component, OnInit, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { _Node, StaticDBService, _Item } from '../static-db.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @Input() home: _Node;
  cols = 4;
  constructor(
    // private answerService: AnswerService,
    private db: StaticDBService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  authorOf(item: _Item): string {
    return item.attr['author'] || '';
  }
  ngOnInit() {
    // this.db.getHome().then(home => this.home = home);
    const toCols = Math.min(Math.floor(window.innerWidth / 200), 4);
    if (toCols !== this.cols) {
      this.cols = toCols;
    }
    // this.route.queryParamMap.subscribe(params => {
    //   const sha1 = params.get('sha1');
    //   if(sha1) {
    //     this.router.navigate(['books', sha1]);
    //   }
    // });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const toCols = Math.min(Math.floor(window.innerWidth / 200), 4);
    if (toCols !== this.cols) {
      this.cols = toCols;
    }
  }
}
