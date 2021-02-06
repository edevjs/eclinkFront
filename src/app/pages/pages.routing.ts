import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links/links.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: '', component: LinksComponent }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class PagesRouterModule { }
