import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';
import * as firebaseui from 'firebaseui';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  loginState = new Subject<User>();
  loginUI(element: string | Element) {
    var uiConfig = {
      signInSuccessUrl: window.location.href,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      // tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      // privacyPolicyUrl: function() {
      //   window.location.assign('<your-privacy-policy-url>');
      // }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start(element, uiConfig);
  }
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