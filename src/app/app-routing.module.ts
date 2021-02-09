import { PagesRouterModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRouterModule,
    AuthRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
