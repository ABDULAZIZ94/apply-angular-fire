import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './social-login/social-login.component';
// import { AngularFireAuthGuard, hasCustomClaim,
//    redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard/auth-guard';

// const adminOnly = () => hasCustomClaim('admin');
// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectLoggedInToWriter = () => redirectLoggedInTo(['writer']);
// const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes: Routes = [
  { 
    path:'login', component: SocialLoginComponent,
    // canActivate: [AngularFireAuthGuard], 
    // data: { authGuardPipe: redirectLoggedInToWriter } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialLoginRoutingModule { }
