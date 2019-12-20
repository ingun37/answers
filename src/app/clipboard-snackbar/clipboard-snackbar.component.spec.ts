import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardSnackbarComponent } from './clipboard-snackbar.component';

describe('ClipboardSnackbarComponent', () => {
  let component: ClipboardSnackbarComponent;
  let fixture: ComponentFixture<ClipboardSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipboardSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
