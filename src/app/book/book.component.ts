import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  item: Item;
  @Input() edit = false;
  constructor(
    private route: ActivatedRoute,
    private answers: AnswerService,
    ) { }

  change(event: MatButtonToggleChange) {
    this.edit = event.source.checked;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const path = decodeURIComponent(params.get('path'));
      this.answers.getItem(path).then(item => {
        this.item = item;
      });
    });
  }

}