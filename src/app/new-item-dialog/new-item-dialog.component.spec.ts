import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemDialogComponent } from './new-item-dialog.component';

describe('NewItemDialogComponent', () => {
  let component: NewItemDialogComponent;
  let fixture: ComponentFixture<NewItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
