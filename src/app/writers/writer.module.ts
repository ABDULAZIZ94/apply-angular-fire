import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterComponent } from './writer/writer.component';
import { WriterRoutingModule } from './writer-routing.module';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

@NgModule({
  declarations: [
    WriterComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule,
    AngularFireAuthGuardModule
  ]
})
export class WriterModule { }
