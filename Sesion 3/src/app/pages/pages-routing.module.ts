import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { NoPageFoundComponent } from '../shared/no-page-found/no-page-found.component';
import { PasajeroComponent } from '../shared/pasajero/pasajero.component';
import { UsuarioComponent } from '../shared/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { titulo: 'dashboard' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { titulo: 'dashboard' }
  },
  {
    path: 'pasajero',
    component: PasajeroComponent,
    data: { titulo: 'pasajero' }
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    data: { titulo: 'usuario' }
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
