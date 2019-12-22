import { Component, OnInit, HostListener } from '@angular/core';
import { _Node, StaticDBService, _Item } from '../static-db.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  home: _Node;
  loading: boolean = false;
  node: _Node;
  cols = 4;
  constructor(
    // private answerService: AnswerService,
    private db: StaticDBService,
    private route: ActivatedRoute,
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
    this.route.queryParamMap.subscribe(params => {
      const sha1 = params.get('sha1');
      this.node = null;
      this.loading = true;
      if (sha1) {
        this.db.getItem(sha1).then(node => {
          this.node = node;
          this.loading = false;
        });
      } else {
        this.loading = false;
      }
      
    });
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
