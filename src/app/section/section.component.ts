import { Component, OnInit, Input, Inject } from '@angular/core';
import { AnswerService, ItemAttribute } from '../answer.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { Router } from '@angular/router';
import { Item } from '../item';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { RemoveBottomSheetComponent } from '../remove-bottom-sheet/remove-bottom-sheet.component';
import { FireService } from '../fire.service';
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
  @Input() edit: boolean;
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
  ngOnInit() {
    this.db.getItem(this.sha1).then(node => {
      this.node = node;
      this.editLink = '/write/' + this.node.item.sha1;
      this.reloadChildren();
      console.log(this.node.item)
      this.questionMD = this.node.item.attr['q'];
      this.answerMD = this.node.item.attr['a'];
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
