import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
import { zip } from "rxjs";
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

    this.route.paramMap.subscribe(params => {
      this.answerService.getItem(params.get('treeId')).subscribe(item => {
        this.item = item;
      });
    });
  }

}
