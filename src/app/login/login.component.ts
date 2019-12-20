import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) { }

  signOut() {
    
  }
  ngOnInit() {
    
  }

}
