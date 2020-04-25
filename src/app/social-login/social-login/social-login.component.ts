import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { SocialLoginService } from '../social-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  // id = new FormControl("");
  // pswd = new FormControl("");
  faGithub = faGithub;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faPhone = faPhone;
  
  constructor(public authService: SocialLoginService, public router:Router) { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.authService.auth.authState.subscribe((user => {
      if (user) {
        console.log('user is: ' + user);
        this.router.navigate['writer'];
      } else {
        console.log('user is: ' + user);
        this.router.navigate['login'];
      }
    })
    );
  }

  googleLogin(){
    this.authService.googleLogin();
  }
  logout(){
    this.authService.logout();
  }
}
