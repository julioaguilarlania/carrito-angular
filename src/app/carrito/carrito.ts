import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito-service';
import { NGXLogger } from 'ngx-logger';
import { DetalleCarrito } from './detalle-carrito.model';
import { Producto } from '../productos/producto.model';
import { ComunicacionService } from './comunicacion-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CurrencyPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito implements OnInit {

  items: DetalleCarrito[] = [];
  precioTotal = 0;
  
  constructor(
    private carritoServ: CarritoService, 
    private comServ: ComunicacionService,
    private logger: NGXLogger) {  }

    ngOnInit() {
      this.comServ.datos$.subscribe(prod => {
        this.logger.debug("recibido", prod);
        this.agregar(prod, 1);
      });
    }

  agregar(producto: Producto, cantidad: number) {
    this.logger.debug("agregar()");
    //this.carritoServ.agregarProducto({idProducto: producto.idProducto, cantidad: cantidad}).subscribe({});
    let agregado = false;
    this.items.forEach(item => {
      if (item.idProducto === producto.idProducto) {
        item.cantidad += cantidad;
        item.precio = item.cantidad * producto.precio;
        this.precioTotal += producto.precio * cantidad;
        agregado = true;
        return;
      }
    });
    if (!agregado) {
      let item = {
        idDetalleCarrito: 0, 
        idProducto: producto.idProducto, 
        nombre: producto.nombre, 
        cantidad: cantidad,
        precioUnitario: producto.precio,
        precio: producto.precio * cantidad}
      this.items.push(item);
      this.precioTotal += producto.precio * cantidad;
    }
  }

  quitar() {
    this.logger.debug("quitar()");
  }
}
