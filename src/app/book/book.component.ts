import { Component, OnInit } from '@angular/core';
import { Item, AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private answers: AnswerService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const path = decodeURIComponent(params.get('path'));
      this.answers.getItem(path).then(item => {
        this.item = item;
      });
    });
  }

}