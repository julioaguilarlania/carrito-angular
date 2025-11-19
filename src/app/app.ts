import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaArticulos } from './lista-articulos/lista-articulos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaArticulos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('carrito-angular');
  saludo = "Hola mundo";

  incrementar() {
    this.saludo = "Hola " + this.saludo;
  }
}
