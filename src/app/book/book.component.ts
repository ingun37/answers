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
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private db: StaticDBService,
    private clipboard: ClipboardService,
    private snackBar: MatSnackBar

  ) { }

  shareClick(item: _Item) {
    this.clipboard.copyFromContent(document.getElementsByTagName('base')[0].href + '?sha1=' + item.sha1);
    this.snackBar.openFromComponent(ClipboardSnackbarComponent, {
      duration: 4 * 1000,
    });
  }
  change(event: MatButtonToggleChange) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.loading = true;
      this.db.getItem(params.get('sha1')).then(node => {
        this.node = node;
        this.loading = false;
      });
    });
  }
}