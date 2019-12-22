import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { WriteComponent } from './write/write.component';
import { BookComponent } from './book/book.component';
import { SectionComponent } from './section/section.component';
import { ExcerptComponent } from './excerpt/excerpt.component';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginUIDirective } from './login-ui.directive';
import { AuthUIComponent } from './auth-ui/auth-ui.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewItemDialogComponent } from './new-item-dialog/new-item-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { RemoveBottomSheetComponent } from './remove-bottom-sheet/remove-bottom-sheet.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClipboardModule } from 'ngx-clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ClipboardSnackbarComponent } from './clipboard-snackbar/clipboard-snackbar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    WriteComponent,
    BookComponent,
    SectionComponent,
    ExcerptComponent,
    LoginUIDirective,
    AuthUIComponent,
    NewItemDialogComponent,
    RemoveBottomSheetComponent,
    ClipboardSnackbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books/:sha1', component: BookComponent },
      { path: 'about', component: AboutComponent },
      // { path: '**', component:  pathMatch: 'prefix' },
    ]),
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    TextFieldModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatListModule,
    MatGridListModule,
    ClipboardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RemoveBottomSheetComponent,
    NewItemDialogComponent,
    ClipboardSnackbarComponent
  ],
})
export class AppModule { }
