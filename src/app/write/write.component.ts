import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService, md2HTML } from '../answer.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MarkdownService } from 'ngx-markdown';
import { Item } from '../item';
import { Account } from '../account';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.sass']
})
export class WriteComponent implements OnInit {
  item: Item;
  attribute: string;
  md: string;
  parentAccountId: string = null;
  previewHTML: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private answer: AnswerService,
    private mdservice: MarkdownService,
    private admin: AdminService
  ) { }
  changed(change: MatButtonToggleChange) {
    console.log(change);
    if (change.value === 'preview') {
      this.previewHTML = md2HTML(this.mdservice, this.md);
    } else if (change.value === 'editor') {
      this.previewHTML = '';
    }
  }
  publish() {
    this.admin.save(this.item.path, this.attribute, this.parentAccountId, this.md).then(() => {
      this.router.navigate(['books', encodeURIComponent(this.item.path)]);
    });
    // const user = this.fire.loginState.value;
    // if (user) {
    //   console.log(user);
    //   this.answer.newAccount(this.item.path, this.attribute, new Account(user.uid, this.md, this.parentAccountId)).then(x => {
    //     this.router.navigate(['books', encodeURIComponent(this.item.path)]);
    //   });
    // }
  }
  cancel() {
    this.router.navigate(['books', this.item.path]);
  }
  ngOnInit() {
    
  }

}
