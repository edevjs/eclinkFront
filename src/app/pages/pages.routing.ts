import { NewsectionComponent } from './section/newsection/newsection.component';
import { SectionComponent } from './section/section.component';
import { AuthGuard } from './../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links/links.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
        { path: '', component: LinksComponent },
        { path: 'sections', component: SectionComponent },
        { path: 'sections/new', component: NewsectionComponent },
        { path: 'sections/new/:id', component: NewsectionComponent }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class PagesRouterModule { }
