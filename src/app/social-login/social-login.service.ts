import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {

  constructor(public auth: AngularFireAuth, public router:Router) { }

  async googleLogin() {
    console.log('googleLogin()');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    // .then(() => this.navigate())
    .then( (success) => this.router.navigate(['writer'])); 
    //  this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  async phoneLogin(){
    this.auth.signInWithPhoneNumber();
  }
  async logout() {
    console.log('logout');
    this.auth.signOut()
    // .then(() => this.navigate());
    .then((success) => this.router.navigate(['login']));
  }
  
  async navigate(){
    console.log('navigate()');
    this.auth.authState.subscribe(user => {
      if (user) {
        console.log('user is: ' + user);
        async () => this.router.navigate(['writer']);
      } else {
        console.log('user is: ' + user);
        async () => this.router.navigate(['login']);
      }
    });
  }

}
