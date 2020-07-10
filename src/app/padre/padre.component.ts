import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
})
export class PadreComponent implements OnInit {
  contadorHijo: number = 0;
  contador: number = 0;
  constructor() {}

  ngOnInit(): void {}

  incrementar(): void {
    this.contador++;
  }
  decrementar(): void {
    this.contador--;
  }
  incrementarHijo(): void {
    this.contadorHijo++;
  }
  decrementarHijo(): void {
    this.contadorHijo--;
  }
}
