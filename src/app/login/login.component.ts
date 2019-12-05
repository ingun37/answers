import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: User = null;
  constructor(
    private fire: FireService,
    private router: Router
  ) { }

  signOut() {
    this.fire.signOut().then(() => {
      this.router.navigate([]);
    });
  }
  ngOnInit() {
    console.log('login init!');
    this.fire.loginState.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

}
