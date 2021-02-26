import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LinksComponent } from './links/links.component';
import { PagesComponent } from './pages.component';
import { SectionComponent } from './section/section.component';
import { NewsectionComponent } from './section/newsection/newsection.component';
import { NewlinkComponent } from './links/newlink/newlink.component';
import { NgSelectizeComponent } from 'ng-selectize';

@NgModule({
  declarations: [
    LinksComponent,
    PagesComponent,
    SectionComponent,
    NewsectionComponent,
    NewlinkComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgSelectizeComponent
  ],
  exports: [
    PagesComponent,
    LinksComponent
  ]
})
export class PagesModule { }
