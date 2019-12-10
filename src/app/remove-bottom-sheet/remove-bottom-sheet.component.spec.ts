import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBottomSheetComponent } from './remove-bottom-sheet.component';

describe('RemoveBottomSheetComponent', () => {
  let component: RemoveBottomSheetComponent;
  let fixture: ComponentFixture<RemoveBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
