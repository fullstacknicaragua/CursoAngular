import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _username: string | null;
  private _autenticado: boolean;
  constructor(private _authService: AuthService, private router: Router, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this._autenticado = this._authService.isAuthenticated();
    this._username = this._authService.usuario.username;
  }
  public get usuario(): any{
    return this._username;
  }
  public get autenticado(): boolean{
    return this._autenticado;
  }
  public logout(): void {
    this._toastr.success("Desconexión exitosa " + this._authService.usuario.username);
    this.router.navigateByUrl("logout");
  }
}