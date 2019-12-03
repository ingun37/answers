import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, AnswerService } from '../answer.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.sass']
})
export class WriteComponent implements OnInit {
  item: Item;
  constructor(
    private route: ActivatedRoute,
    private answer: AnswerService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const path = decodeURIComponent(params.get('path'));
      this.answer.getItem(path).then(item => {
        this.item = item;
      });
    });
  }

}
