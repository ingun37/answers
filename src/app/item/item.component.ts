import { Component, OnInit, OnChanges } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';

declare var MathJax: any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  item;
  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    console.log('item init!');
    this.route.url.subscribe(segments => {
      this.answerService.getItem(segments.join('/')).then(item => {
        this.item = item;
      });
    });
  }
}
