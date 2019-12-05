import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, AnswerService } from '../answer.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.sass']
})
export class WriteComponent implements OnInit {
  item: Item;
  attribute: string;
  md:string;

  constructor(
    private route: ActivatedRoute,
    private answer: AnswerService
  ) { }
  publish() {
    console.log(this.md);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const path = decodeURIComponent(params.get('path'));
      this.attribute = params.get('att');
      this.answer.getItem(path).then(item => {
        this.item = item;
        this.md = item.data[this.attribute];
      });
    });
  }

}
