import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AUTH_TOKEN_ITEM, LOGIN_PATH } from '../app.constantes';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from './login/auth.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  autenticado = false;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private logger: NGXLogger) {}

  estaAutenticado() {
    return this.autenticado;
  }

  logIn(email: string, password: string): Observable<AuthResponse> {
    this.logger.debug("log-in");
    return this.http.post<AuthResponse>(environment.RUTA_SERVIDOR + LOGIN_PATH,
      {'usuario': email, 'password': password}
    )
    .pipe(tap(resp => {
      if (resp.jwt) {
        localStorage.setItem(AUTH_TOKEN_ITEM, resp.jwt);
        this.autenticado = true;
      }
    }));
  }

  logOut() {
    this.logger.debug("log-out");
    this.autenticado = false;
    localStorage.removeItem(AUTH_TOKEN_ITEM);
    this.router.navigateByUrl('/login');
  }
  
}
