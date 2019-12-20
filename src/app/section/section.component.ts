import { Component, OnInit, Input, Inject } from '@angular/core';
import { AnswerService, ItemAttribute } from '../answer.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { Router } from '@angular/router';
import { Item } from '../item';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { RemoveBottomSheetComponent } from '../remove-bottom-sheet/remove-bottom-sheet.component';
import { AdminService } from '../admin.service';
import { _Node, _Item, StaticDBService } from '../static-db.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  @Input() sha1: string;
  node: _Node;
  editLink = '';
  questionMD = null;
  answerMD = null;
  constructor(
    private answer: AnswerService,
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
    private admin: AdminService,
    private db: StaticDBService
  ) { }

  addClick(): void {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '80%',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      // const title: string = result;
      // if (title) {
      //   this.admin.newItem(this.item.path, title).then(() => {
      //     this.reloadChildren();
      //   })
      //   // this.answer.newItem(this.item.path, title).then(() => {
      //   //   this.reloadChildren();
      //   // });
      // } else {

      // }
    });
  }

  reloadChildren() {
    // this.answer
    // this.answer.getChildren(this.item.path).then(children => {
    //   this.children = children;
    // });
  }
  answerOf(item: _Item): string {
    return item.attr['a'] || '';
  }
  questionOf(item: _Item): string {
    return item.attr['q'] || '';
  }

  headlineOf(item: _Item): string {
    if (this.questionOf(item)) {
      return this.questionOf(item).split('\n')[0];
    } else if (this.answerOf(item)) {
      return this.answerOf(item).split('\n')[0];
    } else {
      return '';
    }
  }
  ngOnInit() {
    console.log('section init!');
    this.db.getItem(this.sha1).then(node => {
      this.node = node;
      this.editLink = '/write/' + this.node.item.sha1;
      this.reloadChildren();

      this.questionMD = this.questionOf(node.item) || '';
      this.answerMD = this.answerOf(node.item) || '';
    });
  }
  
  openBottomSheet(): void {
    const ref = this.bottomSheet.open(RemoveBottomSheetComponent);
    ref.afterDismissed().subscribe(result => {
      if (result) {
        // this.admin.delete(this.item.path).then(() => {
        //   this.reloadChildren();
        // })
      } else {

      }
    });
  }
}
