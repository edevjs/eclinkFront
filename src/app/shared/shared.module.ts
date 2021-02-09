import { RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeadComponent
  ]
})
export class SharedModule { }
