import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuarioComponent,
    HeaderComponent,
    FooterComponent,
    NoPageFoundComponent,
    PasajeroComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NoPageFoundComponent
  ]
})
export class SharedModule { }
