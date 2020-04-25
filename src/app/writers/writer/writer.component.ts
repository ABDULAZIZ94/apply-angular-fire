import { Component, OnInit } from '@angular/core';
import { SocialLoginService } from 'src/app/social-login/social-login.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {

  constructor(public authService: SocialLoginService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }
}
