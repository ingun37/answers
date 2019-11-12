import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';

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
    this.route.url.subscribe((segments) => {
      const pathElements = segments.map(x => x.path);
      this.item = this.answerService.getItem(pathElements);
      console.log(`open - ${pathElements.join('/')}`);
    });
  }

}
