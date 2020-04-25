import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriterComponent } from './writer/writer.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard/auth-guard';


const routes: Routes = [
  { 
    path: 'writer', component: WriterComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectUnauthorizedTo(['login']) }  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
