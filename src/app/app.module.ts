import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { MdComponent } from './md/md.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { LoginComponent } from './login/login.component';
import { WriteComponent } from './write/write.component';
import { BookComponent } from './book/book.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent,
    TableComponent,
    MdComponent,
    LoginComponent,
    WriteComponent,
    BookComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'books/:id', component: BookComponent },
      { path: '**', component: ItemComponent, pathMatch: 'prefix' },
    ]),
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
