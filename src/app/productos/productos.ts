import { Component, OnInit } from '@angular/core';
import { FichaProducto } from "./ficha-producto/ficha-producto";
import { Producto } from './producto.model';
import { ProductosService } from './productos-service';
import { FormularioProducto } from './formulario-producto/formulario-producto';

@Component({
  selector: 'app-productos',
  imports: [FichaProducto, FormularioProducto],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos implements OnInit {
  listaProductos:Producto[] = [];
  formularioVisible = false;

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

  mostrarFormulario() {
    this.formularioVisible = true;
  }

  ocultarFormulario() {
    this.formularioVisible = false;
  }

  guardarProducto(prod: Producto) {
    this.formularioVisible = false;
    // this.ocultarFormulario(); // Alternativa
    this.productosServ.crearProducto(prod)
      .subscribe({
        next: p => {
          console.log("Producto guardado");
          this.listaProductos.unshift(p); // Para efectos de verlo
          // this.formularioVisible = false; // POSIBLE PERO NO RECOMENDADO
          // TODO: Mostrar mensaje
        },
        error: err => {
          console.error("ERROR", err);
          // TODO: Mostrar mensaje error
        }
      });
  }

}
