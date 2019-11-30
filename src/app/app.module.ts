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

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent,
    TableComponent,
    MdComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'doc/:treeId', component: ItemComponent },
      { path: 'login', component: LoginComponent }
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
