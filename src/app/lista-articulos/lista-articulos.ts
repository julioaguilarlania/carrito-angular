import { Component } from '@angular/core';
import { productosCafe } from './productos-coffee';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-lista-arts',
  imports: [CurrencyPipe],
  //template: '<p>{{ listaProductos }}</p>',
  templateUrl: './lista-articulos.html',
  styleUrl: './lista-articulos.scss',
})
export class ListaArticulos {
  listaProductos = productosCafe;
}
