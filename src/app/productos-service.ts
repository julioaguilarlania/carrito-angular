import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './productos/producto.model';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  
  urlProductos = "http://localhost:8080/api/productos";

  constructor(private http:HttpClient, private logger: NGXLogger) {}

  getProductos() : Observable<Producto[]> {
    this.logger.info("getProductos()");
    var resultado = this.http.get<Producto[]>(this.urlProductos);
    this.logger.trace("resultado de consulta", resultado);
    return resultado;
  }

  crearProducto(prod: Producto) : Observable<Producto> {
    this.logger.info("crearProducto()");
    return this.http.post<Producto>(this.urlProductos, prod);
  }
}
