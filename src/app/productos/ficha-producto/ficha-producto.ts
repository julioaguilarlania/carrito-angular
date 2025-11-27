import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../producto.model';
import { CurrencyPipe } from '@angular/common';
import { ComunicacionService } from '../../carrito/comunicacion-service';

@Component({
  selector: 'app-ficha-producto',
  imports: [CurrencyPipe],
  templateUrl: './ficha-producto.html',
  styleUrl: './ficha-producto.scss',
})
export class FichaProducto {

  @Input() producto!: Producto;

  constructor(private comService: ComunicacionService) { }

  agregar(prod: Producto) {
    this.comService.enviarProducto(prod);
  }

}
