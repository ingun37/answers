import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.sass']
})
export class AuthUIComponent implements OnInit {

  constructor(
    private fire: FireService
  ) { }

  ngOnInit() {
    this.fire.loginUI('#firebaseui-auth-container');
  }

}
