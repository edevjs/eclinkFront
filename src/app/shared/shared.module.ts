import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtils } from './utils/common.utils';

@NgModule({
  declarations: [
    HeadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeadComponent,
  ]
})
export class SharedModule { }
