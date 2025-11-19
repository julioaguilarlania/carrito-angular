import { Component, OnInit } from '@angular/core';
import { FichaProducto } from "./ficha-producto/ficha-producto";
import { Producto } from './producto.model';
import { ProductosService } from '../productos-service';

@Component({
  selector: 'app-productos',
  imports: [FichaProducto],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos implements OnInit {
  listaProductos:Producto[] = [];

  constructor(private productosServ: ProductosService) {  }

  ngOnInit(): void {
    console.log("entrando a ngOnInit()");
    this.productosServ.getProductos().subscribe(
      {
      next : lp => {
        this.listaProductos = lp;
        console.log( this.listaProductos.length + " productos recibidos");
      },
      error: err => { console.error(err); }
      }
    );
    console.log("saliendo de ngOnInit()");
  }


}
