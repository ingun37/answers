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

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  @Input() item: Item;
  @Input() edit: boolean;
  children: Item[];
  editLink = '';
  questionMD = null;
  answerMD = null;
  constructor(
    private answer: AnswerService,
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
  ) { }

  addClick(): void {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '80%',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      const title: string = result;
      if (title) {
        this.answer.newItem(this.item.path, title).then(() => {
          this.reloadChildren();
        });
      } else {

      }
    });
  }

  reloadChildren() {
    this.answer.getChildren(this.item.path).then(children => {
      this.children = children;
    });
  }
  ngOnInit() {
    this.editLink = '/write/' + encodeURIComponent(this.item.path);
    this.reloadChildren();
    this.answer.getAccountsOfItem(this.item.path, ItemAttribute.QUESTION).then(accounts => {
      if (accounts.length > 0) {
        this.questionMD = accounts[0].account.value;
      } else {
        this.questionMD = '';
      }
    });
    this.answer.getAccountsOfItem(this.item.path, ItemAttribute.ANSWER).then(accounts => {
      if (accounts.length > 0) {
        this.answerMD = accounts[0].account.value;
      } else {
        this.answerMD = '';
      }
    });
  }
  
  openBottomSheet(): void {
    const ref = this.bottomSheet.open(RemoveBottomSheetComponent);
    ref.afterDismissed().subscribe(result => {
      if (result) {
        this.answer.deleteItem(this.item.path).then(() => {
          this.reloadChildren();
        }).catch(reason => {
          console.log(reason);
        });
      } else {

      }
    });
  }
}
