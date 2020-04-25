import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterComponent } from './writer/writer.component';
import { WriterRoutingModule } from './writer-routing.module';



@NgModule({
  declarations: [
    WriterComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule
  ]
})
export class WriterModule { }
