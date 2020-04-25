import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SocialLoginService{

  constructor(public auth: AngularFireAuth, public router:Router) { }

  googleLogin() {
    console.log('googleLogin()');
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    // .then(this.router.navigate['/writer']); 
   this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    console.log('logout');
    this.auth.signOut()
    // .then(() => console.log('logout().then()'));
  }
  
}
