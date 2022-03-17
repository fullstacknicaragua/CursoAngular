import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises/paises.service';
import { PasajeroService } from 'src/app/services/pasajero/pasajero.service';
import { Paises } from '../models/paises/paises';
import { Pasajero } from '../models/pasajero/pasajero';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-pasajero',
  templateUrl: './registro-pasajero.component.html',
  styleUrls: ['./registro-pasajero.component.scss']
})
export class RegistroPasajeroComponent implements OnInit {
  public pais: Paises[] = [];
  private esEditar: boolean = false;

  @Input('formulario') formulario: FormGroup;
  @Input('infoPasajero') infoPasajero: Pasajero;

  constructor(
    private paisService: PaisesService,
    private pasajeroService: PasajeroService,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.ObtenerListaPaises();
    if (this.infoPasajero) {
      this.esEditar = true;
      this.LLenarFormulario();
      //console.log('desde el padre', this.infoPasajero);
    }
  }

  ObtenerListaPaises() {
    //debugger;
    let exito: Paises[];
    this.paisService.ObtenerListaPaises().subscribe({
      next: (d) => {
        if (d) {
          exito = d;
        }
      },
      error: (e: HttpErrorResponse) => { console.error('error', e.message) },
      complete: () => {
        if (exito) {
          this.pais = exito;
        }
      }
    })
  }

  Guardar() {
    //debugger;
    let exito: Pasajero;
    let objeto = this.formulario.getRawValue();
    objeto.fechaNacimiento = this.FormatearFecha(objeto.fechaNacimiento)
    //console.log('form', objeto);
    this.pasajeroService.Guardar(objeto).subscribe({
      next: (d) => {
        if (d) {
          exito = d
        }
      },
      error: (e: HttpErrorResponse) => {
        console.error('error', e.message);
        Swal.fire({
          title: 'Error',
          text: 'Ah ocurrido un error al guardar los datos',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      },
      complete: () => {
        if (exito) {
          Swal.fire({
            title: 'Exito',
            text: 'Registro guardado sastifactoriamente...!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          this.LimpiarFormulario();
        }
      }
    })

  }

  FormatearFecha(valor: Date) {
    return this.datepipe.transform(valor, 'yyyy-MM-dd');
  }

  LimpiarFormulario() {
    this.formulario.reset();
    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();
  }

  LLenarFormulario() {
    if (this.infoPasajero) {
      this.formulario.patchValue(this.infoPasajero)
      // this.formulario.get('clave')?.patchValue(this.infoPasajero.clave);
      // this.formulario.get('email')?.patchValue(this.infoPasajero.email);
      // this.formulario.get('fechaNacimiento')?.patchValue(this.infoPasajero.fechaNacimiento);
      // this.formulario.get('idPais')?.patchValue(this.infoPasajero.idPais);
      // this.formulario.get('idPasajero')?.patchValue(this.infoPasajero.idPasajero);
      // this.formulario.get('numDocumento')?.patchValue(this.infoPasajero.numDocumento);
      // this.formulario.get('primerApellido')?.patchValue(this.infoPasajero.primerApellido);
      // this.formulario.get('primerNombre')?.patchValue(this.infoPasajero.primerNombre);
      // this.formulario.get('segundoApellido')?.patchValue(this.infoPasajero.segundoApellido);
      // this.formulario.get('segundoNombre')?.patchValue(this.infoPasajero.segundoNombre);
      // this.formulario.get('telefono')?.patchValue(this.infoPasajero.telefono);
      // this.formulario.get('tipoDocumento')?.patchValue(this.infoPasajero.tipoDocumento);
    }
  }

}
