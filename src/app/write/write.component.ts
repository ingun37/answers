import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService, md2HTML } from '../answer.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MarkdownService } from 'ngx-markdown';
import { Item } from '../item';
import { Account } from '../account';

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
    private mdservice: MarkdownService
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
    this.answer.newAccount(this.item.path, this.attribute, new Account('author', this.md, this.parentAccountId))
    // this.answer.mergeToItem(this.item.path, data).then(() => {
    //   this.router.navigate(['books', this.item.path]);
    // });
  }
  cancel() {
    this.router.navigate(['books', this.item.path]);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const path = decodeURIComponent(params.get('path'));
      this.attribute = params.get('att');
      this.answer.getItem(path).then(item => {
        this.item = item;
        this.answer.getAccountsOfItem(item.path, this.attribute).then(accounts => {
          if (accounts.length > 0) {
            const parentAccount = accounts[accounts.length - 1].account;
            this.parentAccountId = accounts[accounts.length - 1].id;
            this.md = parentAccount.value;
          }
        });
      });
    });
  }

}
