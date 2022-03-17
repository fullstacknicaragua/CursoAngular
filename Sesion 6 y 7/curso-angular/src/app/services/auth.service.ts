import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: string | null;
  private _usuario: any;
  private urlApi: string = environment.urlLogin;
  constructor(private http: HttpClient, private router: Router) { }

  isNoAutorized(e: any): boolean {
    if (e.status == 401) {
      this.router.navigate(['/logout']);
      return true;
    }
    if (e.status == 403) {
      // Swal.fire('Acceso denegado', `Hola ${this.usuario.username} no tienes acceso a este recurso!`, 'warning');
      return true;
    }
    return false;
  }
  login(usuario: any): Observable<any> {
    return this.http.post<any>(environment.urlServer + this.urlApi, usuario).pipe(
      retry(0),
      catchError((e) => {
        return throwError(e);
      })
    );
  }
  guardarUsuario(usuario: any): void {
    this._usuario = {
      username : usuario.username,
      rol : usuario.authorities[0].authority
    }
    localStorage.setItem('usuario', JSON.stringify(this._usuario));
  }
  guardarToken(accessToken: string): void {
    this._token = accessToken;
    localStorage.setItem('token', accessToken);
  }
  public get token(): any{
    if (this._token != null || this._token!= undefined) {
      return this._token;
    } else if (this._token == null && localStorage.getItem('token') != null) {
      this._token = localStorage.getItem('token');
      return this._token;
    }
    return null;
  } 
  public get usuario(): any {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && localStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(localStorage.getItem('usuario'));
      return this._usuario;
    }
    return null;
  }
  obtenerDatosToken(accessToken: string): any {
    if(accessToken!= null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
  }
  isAuthenticated(): boolean{
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.sub && payload.sub.length > 0) {
      return true;
    }
    return false;
    }
    logout(){
      this._token = null;
      this._usuario = null;
      localStorage.clear();
    }
}
