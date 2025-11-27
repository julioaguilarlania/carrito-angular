import { Component, OnInit } from '@angular/core';
import { FichaProducto } from "./ficha-producto/ficha-producto";
import { Producto } from './producto.model';
import { ProductosService } from './productos-service';
import { FormularioProducto } from './formulario-producto/formulario-producto';
import { FormsModule } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Carrito } from "../carrito/carrito";

@Component({
  selector: 'app-productos',
  imports: [FormsModule, FichaProducto, FormularioProducto, Carrito],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})
export class Productos implements OnInit {
  listaProductos:Producto[] = [];
  formularioVisible = false;
  cadenaBusqueda = "";

  constructor(private productosServ: ProductosService,
    private logger: NGXLogger
  ) {  }

  ngOnInit(): void {
    this.logger.debug("entrando a ngOnInit()");
    this.cargarTodos();
    this.logger.debug("saliendo de ngOnInit()");
  }

  cargarTodos() {
    this.logger.debug("cargarTodos()");
    this.productosServ.getProductos().subscribe(
      {
      next : lp => {
        this.listaProductos = lp;
        console.log( this.listaProductos.length + " productos recibidos");
      },
      error: err => { console.error(err); }
      }
    );
  }

  buscarProductos() {
    this.logger.debug("buscarProductos()");
    this.productosServ.buscarProductos(this.cadenaBusqueda).subscribe(
      {
      next : lp => {
        this.listaProductos = lp;
        console.log( this.listaProductos.length + " productos recibidos");
      },
      error: err => { console.error(err); }
      }
    );
  }

  mostrarFormulario() {
    this.formularioVisible = true;
  }

  ocultarFormulario() {
    this.formularioVisible = false;
  }

  guardarProducto(prod: Producto) {
    this.logger.debug("guardarProducto()");
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
