import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss']
})
export class PasajeroComponent implements OnInit {
  public valorFormulario: any = {};
  public formPasajero: FormGroup = new FormGroup({});

  constructor(
    private formbuilder: FormBuilder
  ) {
    this.InicializarFormulario();
  }


  ngOnInit(): void {
  }

  InicializarFormulario() {
    this.formPasajero = this.formbuilder.group({
      primerNombre: new FormControl(null, [Validators.required]),
      segundoNombre: new FormControl(null, []),
      grupo: this.formbuilder.group({
        primerApellido: new FormControl(null, [Validators.required])
      }),
      segundoApellido: new FormControl(null, [])
    });   

    this.formPasajero.get('primerNombre')?.valueChanges.subscribe(x=>{
      console.log(x);
      
    });
    
  }

  MostrarValorFormulario() {
    console.log('Valor formulario', this.formPasajero.getRawValue());
  }

}
