import { Component } from '@angular/core';
import { FireService } from './fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'answers-front';
  constructor (
    private fire: FireService
  ) {}
}
