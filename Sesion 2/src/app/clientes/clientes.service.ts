import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Injectable()
export class ClientesService {

  constructor() { }
  getClientes(): Cliente[]{
   return CLIENTES;
  }
}
