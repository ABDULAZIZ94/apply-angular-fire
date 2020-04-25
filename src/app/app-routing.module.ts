import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { SocialLoginComponent } from './social-login/social-login/social-login.component';

const route:Routes = [
  { path: 'login', component: SocialLoginComponent},
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route,{enableTracing: true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
