import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PagesComponent } from './pages/pages/pages.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent, data: {titulo: 'Inicio Sesión'}
  },
  {
    path:'logout', component:LogoutComponent, data: {titulo: 'Cierra Sesión'}
  },
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'no-page-found',
    component: NoPageFoundComponent
  },
  {
    path: '**',
    redirectTo: 'no-page-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
