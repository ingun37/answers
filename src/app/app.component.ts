import { Component } from '@angular/core';
import { FireService } from './fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'answers-front';
  userName: string = null;
  loaded = false;
  constructor(
    private fire: FireService
  ) {}
  ngOnInit() {
    this.fire.loginState.subscribe(user => {
      this.loaded = true;
      if (user) {
        this.userName = user.name;
      } else {
        this.userName = null;
      }
    });
  }
}
