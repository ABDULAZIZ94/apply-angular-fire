import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const route:Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route,{enableTracing: false})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
