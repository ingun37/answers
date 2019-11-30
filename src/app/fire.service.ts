import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  loginState = new Subject<User>();
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyC4PoEmZsfFFYHi6fCNM35BOPGM_tSjyvw",
      authDomain: "answers-63af8.firebaseapp.com",
      databaseURL: "https://answers-63af8.firebaseio.com",
      projectId: "answers-63af8",
      storageBucket: "answers-63af8.appspot.com",
      messagingSenderId: "386136782941",
      appId: "1:386136782941:web:ad344a273c2689979075b4",
      measurementId: "G-1L092V7T1R"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loginState.next(new User(user.displayName));
      } else {
        this.loginState.next(null);
      }
      // if (user) {
      //   // User is signed in.
      //   var displayName = user.displayName;
      //   var email = user.email;
      //   var emailVerified = user.emailVerified;
      //   var photoURL = user.photoURL;
      //   var uid = user.uid;
      //   var phoneNumber = user.phoneNumber;
      //   var providerData = user.providerData;
      //   user.getIdToken().then(function(accessToken) {
      //     document.getElementById('sign-in-status').textContent = 'Signed in';
      //     document.getElementById('sign-in').textContent = 'Sign out';
      //     document.getElementById('account-details').textContent = JSON.stringify({
      //       displayName: displayName,
      //       email: email,
      //       emailVerified: emailVerified,
      //       phoneNumber: phoneNumber,
      //       photoURL: photoURL,
      //       uid: uid,
      //       accessToken: accessToken,
      //       providerData: providerData
      //     }, null, '  ');
      //   });
      // } else {
      //   // User is signed out.
      //   document.getElementById('sign-in-status').textContent = 'Signed out';
      //   document.getElementById('sign-in').textContent = 'Sign in';
      //   document.getElementById('account-details').textContent = 'null';
      // }
    }, function(error) {
      console.log(error);
    });
  }
}

class User {
  constructor(
    public name: string
  ) {}
};