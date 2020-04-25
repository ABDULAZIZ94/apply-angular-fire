import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriterComponent } from './writer/writer.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { 
    path: 'writer', component: WriterComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectUnauthorizedToLogin }  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
