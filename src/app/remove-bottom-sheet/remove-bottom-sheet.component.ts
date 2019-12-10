import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

export interface BottomSheetData {
  permit: boolean;
}

@Component({
  selector: 'app-remove-bottom-sheet',
  templateUrl: './remove-bottom-sheet.component.html',
  styleUrls: ['./remove-bottom-sheet.component.sass']
})
export class RemoveBottomSheetComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<RemoveBottomSheetComponent>,
    ) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  yes() {
    this.bottomSheetRef.dismiss(true);
  }

  no() {
    this.bottomSheetRef.dismiss(false);
  }
}
