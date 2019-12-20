import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { _Node, StaticDBService, _Item } from '../static-db.service';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardSnackbarComponent } from '../clipboard-snackbar/clipboard-snackbar.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  node: _Node;
  sha1: string;
  uid: string = null;
  constructor(
    private route: ActivatedRoute,
    private db: StaticDBService,
    private clipboard: ClipboardService,
    private _snackBar: MatSnackBar

  ) { }

  shareClick(item: _Item) {
    this.clipboard.copyFromContent(location.origin + '/books/' + item.sha1);
    this._snackBar.openFromComponent(ClipboardSnackbarComponent, {
      duration: 4 * 1000,
    });
  }
  change(event: MatButtonToggleChange) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sha1 = null;
      const sha1 = params.get('sha1');
      this.db.getItem(sha1).then(node => {
        this.node = node;
        this.sha1 = node.item.sha1;
      });
    });
  }
}