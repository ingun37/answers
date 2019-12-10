import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  item: Item;
  @Input() edit = false;
  uid: string = null;
  constructor(
    private route: ActivatedRoute,
    private answers: AnswerService,
    private fire: FireService,
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
    this.fire.loginState.subscribe(user => {
      if(user) {
        this.uid = user.uid;
      } else {
        this.uid = "";
      }
    });
  }
}