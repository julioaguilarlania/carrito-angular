import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';
  password = '';
  enEspera = false;
  hayError = false;
  mensajeError = '';

  constructor(
    private authServ: AuthService, 
    private router: Router, 
    private logger: NGXLogger) {}

  login() {
    this.logger.info('Login submit')
    this.hayError = false;
    this.mensajeError = '';
    this.enEspera = true;
    this.authServ.logIn(this.email, this.password)
      .subscribe({
        next: (response) => {
          this.logger.debug('Login response');
          this.enEspera = false;
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          if (err.status == 401) {
            this.mensajeError = "Email o usuario incorrectos";
          }
          else if (err.message) {
            this.mensajeError = err.mensaje;
          }
          else {
            this.mensajeError = "Error en login";
          }
          this.logger.error(err);
          this.hayError = true;
          this.email = '';
          this.password = '';
          this.enEspera = false;
        }
      });
}

}
