import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './productos/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  
  urlProductos = "http://localhost:8080/api/productos";

  constructor(private http:HttpClient) {}

  getProductos() : Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlProductos);
  }

  crearProducto(prod: Producto) : Observable<Producto> {
    return this.http.post<Producto>(this.urlProductos, prod);
  }
}
