import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { BACKEND_PRODUCTOS_PATH, BACKEND_PRODUCTOS_QUERY_PARAM } from '../app.constantes';
import { environment } from '../../environments/environment';
import { productosCafe } from '../lista-articulos/productos-coffee';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  
  urlProductos = environment.BACKEND_URL + BACKEND_PRODUCTOS_PATH;
  listaLocal = productosCafe;
  modoSimulado = false;

  constructor(private http:HttpClient, private logger: NGXLogger) {}

  getProductos() : Observable<Producto[]> {
    this.logger.info("getProductos()");
    if (this.modoSimulado) {
      return of(this.listaLocal);
    }
    else {
      return this.http.get<Producto[]>(this.urlProductos);
    }
  }

  buscarProductos(cadena: string) : Observable<Producto[]> {
    this.logger.info("buscarProductos()");
    let params = new HttpParams().set(BACKEND_PRODUCTOS_QUERY_PARAM, cadena);
    return this.http.get<Producto[]>(this.urlProductos, {params: params});
  }

  crearProducto(prod: Producto) : Observable<Producto> {
    this.logger.info("crearProducto()");
    return this.http.post<Producto>(this.urlProductos, prod);
  }
}
