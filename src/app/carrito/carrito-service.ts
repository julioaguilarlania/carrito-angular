import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleCarrito } from './detalle-carrito.model';
import { BACKEND_CARRITOS_PATH, BACKEND_DETALLE_PATH } from '../app.constantes';
import { environment } from '../../environments/environment';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  urlCarritos = environment.BACKEND_URL + BACKEND_CARRITOS_PATH;

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  agregarProducto(detalle: DetalleCarrito): Observable<DetalleCarrito> {
    this.logger.debug("agregarProducto()");
    return this.http.post<DetalleCarrito>(this.urlCarritos, detalle);
  }

  quitarProducto(idDetalleCarrito: number) {
    this.logger.debug("quitarProducto()");
    return this.http.delete(this.urlCarritos + BACKEND_DETALLE_PATH + "/" + idDetalleCarrito);
  }

}
