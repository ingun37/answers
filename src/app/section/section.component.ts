import { Component, OnInit, Input, Inject } from '@angular/core';
import { Item, AnswerService } from '../answer.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewItemDialogComponent } from '../new-item-dialog/new-item-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  @Input() item: Item;
  children: Item[];
  unfolds = new Set<string>();
  editLink = '';
  constructor(
    private answer: AnswerService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  addClick(): void {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '250px',
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
  }

  unfold(item: Item) {
    this.unfolds = this.unfolds.add(item.path);
  }

  onChange(path: string, event: MatButtonToggleChange) {
    if (event.source.checked) {
      this.unfolds.add(path);
    } else {
      this.unfolds.delete(path);
    }
  }
}
