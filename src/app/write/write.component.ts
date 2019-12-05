import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  md: string;
  previewHTML: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private answer: AnswerService
  ) { }
  publish() {
    const data = {};
    data[this.attribute] = this.md;
    this.answer.mergeToItem(this.item.path, data).then(() => {
      this.router.navigate(['books', this.item.path]);
    });
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
