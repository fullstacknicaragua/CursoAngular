import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PasajeroService } from 'src/app/services/pasajero/pasajero.service';
import { Pasajero } from '../models/pasajero/pasajero';

@Component({
  selector: 'app-buzon-pasajeros',
  templateUrl: './buzon-pasajeros.component.html',
  styleUrls: ['./buzon-pasajeros.component.scss']
})
export class BuzonPasajerosComponent implements OnInit {
  public formulario: FormGroup;
  private objEnvio: any;
  private infoPasajero: Pasajero[] = [];
  public dataSource = new MatTableDataSource<Pasajero>([]);
  public columnas: string[] = [
    'idPasajero',
    'nombrecompleto',
    'fechanacimiento',
    'telefono',
    'numerodocumento',
    'acciones'
  ];

  @Output('esNuevo') esNuevo: EventEmitter<boolean> = new EventEmitter(false);
  @Output('pasajero') pasajero: EventEmitter<Pasajero> = new EventEmitter();

  constructor(
    private formbuilder: FormBuilder,
    private pasajeroService: PasajeroService,
    private datepipe: DatePipe
  ) {
    this.InicializarFormulario();
  }

  ngOnInit(): void {
  }

  InicializarFormulario() {
    this.formulario = this.formbuilder.group({
      idpasajero: new FormControl(null, [])
    })
  }

  Buscar() {
    let obj = this.formulario.getRawValue();
    this.ObtenerPasajeroId(obj.idpasajero);
  }

  ObtenerPasajeroId(idPasajero: string) {
    //debugger;
    let exito: Pasajero;
    this.pasajeroService.ObtenerPasajeroId(idPasajero).subscribe({
      next: (d) => {
        if (d) {
          exito = d;
        }
      },
      error: (e: HttpErrorResponse) => {
        console.error('error', e.message);
      },
      complete: () => {
        if (exito) {
          this.infoPasajero.push(exito);
          this.dataSource.data = this.infoPasajero;
          //console.log(this.infoPasajero);
        }
      }
    })
  }

  MostrarNombreCompleto(pasajero: Pasajero) {
    //debugger;
    let nombrecompleto = `${pasajero.primerNombre || ''} ${pasajero.segundoNombre || ''} ${pasajero.primerApellido || ''} ${pasajero.segundoApellido || ''}`;
    return nombrecompleto;
  }

  MostrarFecha(pasajero: Pasajero) {
    let fecha = this.datepipe.transform(pasajero.fechaNacimiento, 'dd/MM/yyyy', 'GMT-0600', 'es-NI');
    return fecha;
  }

  Nuevo() {
    this.esNuevo.emit(true);
  }

  Seleccionar(pasajero: Pasajero) {
    //console.log('desde el hijo', pasajero);
    this.pasajero.emit(pasajero);

  }

}
