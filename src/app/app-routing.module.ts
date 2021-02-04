import { PagesRouterModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRouterModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
