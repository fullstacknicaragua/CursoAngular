import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pasajero } from '../models/pasajero/pasajero';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss']
})
export class PasajeroComponent implements OnInit {
  public valorFormulario: any = {};
  public formPasajero: FormGroup = new FormGroup({});
  public esNuevo: boolean = false;
  public infoPasajero: Pasajero;

  constructor(
    private formbuilder: FormBuilder
  ) {
    this.InicializarFormulario();
  }


  ngOnInit(): void {
  }

  InicializarFormulario() {
    this.formPasajero = this.formbuilder.group({
      clave: new FormControl('', []),
      email: new FormControl('', [Validators.email]),
      fechaNacimiento: new FormControl('', []),
      idPais: new FormControl('', [Validators.required]),
      idPasajero: new FormControl('', []),
      numDocumento: new FormControl('', [Validators.required]),
      primerApellido: new FormControl('', [Validators.required]),
      primerNombre: new FormControl('', [Validators.required]),
      segundoApellido: new FormControl('', []),
      segundoNombre: new FormControl('', []),
      telefono: new FormControl('', [Validators.required]),
      tipoDocumento: new FormControl('', [])
    });

    // this.formPasajero.get('primerNombre')?.valueChanges.subscribe(x => {
    //   console.log(x);

    // });
  }

  Nuevo(d: boolean) {
    this.esNuevo = d;
  }
  
  Regresar() {
    this.esNuevo = false;
  }

  Recuperar(pasajero: Pasajero) {
    if (pasajero) {
      this.esNuevo = true;
      this.infoPasajero = pasajero;
    }
  }

}
