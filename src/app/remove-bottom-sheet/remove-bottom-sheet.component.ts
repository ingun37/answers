import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-remove-bottom-sheet',
  templateUrl: './remove-bottom-sheet.component.html',
  styleUrls: ['./remove-bottom-sheet.component.sass']
})
export class RemoveBottomSheetComponent implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<RemoveBottomSheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
