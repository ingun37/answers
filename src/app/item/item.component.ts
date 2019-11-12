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
    this.route.paramMap.subscribe(params => {
      this.item = this.answerService.getItem(params.get('treeId'));
    });
  }

}
