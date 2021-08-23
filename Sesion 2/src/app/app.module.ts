import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientesService } from './clientes/clientes.service';

const ROUTES: Routes = [
  {path:'', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component:ClientesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
