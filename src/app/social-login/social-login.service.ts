import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {

  constructor(public auth: AngularFireAuth) { }

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }
  logout() {
    this.auth.signOut();
  }
}
