import { HeadComponent } from './head/head.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadComponent
  ]
})
export class SharedModule { }
