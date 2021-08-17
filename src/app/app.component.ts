import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularGames';
  constructor() {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyClMF9B3Z_yT5nHG4GAmnVs6L5K1LnBk9o',
      authDomain: 'angular-games-developablo.firebaseapp.com',
      projectId: 'angular-games-developablo',
      storageBucket: 'angular-games-developablo.appspot.com',
      messagingSenderId: '995768913589',
      appId: '1:995768913589:web:96320070abdc9c23be38fc',
      measurementId: 'G-Y4T4NFKP2N',
    };
    firebase.initializeApp(firebaseConfig);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential['accessToken'];
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
}
