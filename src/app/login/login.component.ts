import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private fire: FireService
  ) { }

  ngOnInit() {
    this.fire.loginUI('#firebaseui-auth-container');
  }

}
