import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireService {

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
  }
}
