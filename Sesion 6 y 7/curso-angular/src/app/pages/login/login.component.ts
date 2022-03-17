import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public fGroupUser: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private _toastr: ToastrService) { 
    this.initFormGroup();
  }
  ngOnInit(): void {
  }
  initFormGroup() {
    this.fGroupUser = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
    });
  }
  public validate(): void {
if(this.fGroupUser.get('username') == null &&
   this.fGroupUser.get('password') == null){
    Swal.fire('Error Login', 'Username o password vacías!', 'error');
    return;
   }
   const object = {
    username: this.fGroupUser.get('username')?.value,
    clave: this.fGroupUser.get('password')?.value,
  };
  this.authService.login(object).subscribe(
    (response: any) => {
      console.log(response);
      let payload= JSON.parse(atob(response.data.token.split(".")[1]));
      console.log(payload);
      this.authService.guardarUsuario(response.data.user);
      this.authService.guardarToken(response.data.token);
      this.router.navigate(['/dashboard']);
      this._toastr.success(response.message);
    },
    // manejo de error de credenciales incorrectas
    (err: any) => {
      if (err.status == 401) {
        Swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
  );
  }
}
