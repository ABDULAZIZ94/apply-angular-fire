import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginRoutingModule } from './social-login-routing.module';
import { SocialLoginComponent } from './social-login/social-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    SocialLoginComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularFireAuthGuardModule,
    SocialLoginRoutingModule,
    AngularFireAuthModule,
    AngularFireModule
  ]
})
export class SocialLoginModule { }
