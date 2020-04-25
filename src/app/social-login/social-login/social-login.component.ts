import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
