import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LinksComponent } from './links/links.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    LinksComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    LinksComponent
  ]
})
export class PagesModule { }
