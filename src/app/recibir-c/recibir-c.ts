import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recibir-c',
  styleUrl: './recibir-c.css',
  templateUrl: './recibir-c.html',
})
export class RecibirC {
  readonly colorActual = input('#000000');

  protected readonly valorHex = signal('');

  readonly colorIngresado = output<string>();

  constructor() {
    effect(() => {
      this.valorHex.set(this.colorActual());
    });
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valorHex.set(input.value);
  }

  mostrar() {
    this.colorIngresado.emit(this.valorHex());
  }
}
