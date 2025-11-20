import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../productos/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.scss',
})
export class FormularioProducto {

  @Output() guardado = new EventEmitter<Producto>();

  @Output() cancelacion = new EventEmitter<void>();

  nuevoProducto: Producto = {idProducto: -1, nombre: "", descripcion: "", cantidadDisponible: 0, precio: 0};

  cancelar() {
    this.cancelacion.emit();
  }

  guardar() {
    this.guardado.emit(this.nuevoProducto);
  }
}
