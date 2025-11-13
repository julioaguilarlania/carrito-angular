import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
