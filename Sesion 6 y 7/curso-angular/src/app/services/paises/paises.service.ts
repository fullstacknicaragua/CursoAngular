import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Paises } from 'src/app/shared/models/paises/paises';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  protected urlApi: string = environment.urlPaises;

  constructor(
    private http: HttpClient
  ) { }

  ObtenerListaPaises(): Observable<Paises | any> {
    const url = `${this.urlApi}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError((e) => {
        return throwError(e);
      })
    );
  }
}
