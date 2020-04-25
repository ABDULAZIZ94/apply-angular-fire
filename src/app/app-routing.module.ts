import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';

const route:Routes = [
  { path:'', component: HomepageComponent },
  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthGuard,
    RouterModule.forRoot(route,{enableTracing: true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
