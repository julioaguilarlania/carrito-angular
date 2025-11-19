import { Component } from '@angular/core';
import { productosCafe } from '../lista-articulos/productos-coffee';
import { FichaProducto } from "./ficha-producto/ficha-producto";
import { Producto } from './producto.model';

@Component({
  selector: 'app-productos',
  imports: [FichaProducto],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos {
  listaProductos:Producto[] = productosCafe;
}
