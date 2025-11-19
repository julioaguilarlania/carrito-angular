import { Component, Input } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-ficha-producto',
  imports: [],
  templateUrl: './ficha-producto.html',
  styleUrl: './ficha-producto.scss',
})
export class FichaProducto {

  @Input() producto!: Producto;
}
