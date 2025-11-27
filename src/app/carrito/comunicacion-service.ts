import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Producto } from "../productos/producto.model";

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {

    private subjectDatos = new Subject<Producto>();
    datos$ = this.subjectDatos.asObservable();

    enviarProducto(prod: Producto) {
        this.subjectDatos.next(prod);
    }
}