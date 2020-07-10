import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {
  @Input() contador: number = 0;
  @Output() incrementarPadre = new EventEmitter<void>();
  @Output() decrementarPadre = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  incrementar(): void {
    this.incrementarPadre.emit();
  }
  decrementar(): void {
    this.decrementarPadre.emit();
  }
}
