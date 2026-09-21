import { Component, effect, input, model, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-indicar-c',
  styleUrl: './indicar-c.css',
  templateUrl: './indicar-c.html',
})
export class IndicarC {
  readonly letra = input('');
  readonly valor = model(0);

  protected readonly texto = signal('0');

  constructor() {
    effect(() => {
      this.texto.set(String(this.valor()));
    });
  }

  onInput(event: Event) {
    const elemento = event.target as HTMLInputElement;
    this.texto.set(elemento.value);
  }

  confirmar() {
    const numero = this.parsear(this.texto());

    if (numero === null) {
      this.texto.set(String(this.valor()));
      return;
    }

    this.valor.set(numero);
  }

  private parsear(valor: string): number | null {
    let limpio = valor.trim();
    let esHex = false;

    if (limpio.startsWith('#')) {
      limpio = limpio.slice(1);
      esHex = true;
    } else if (/^0x/i.test(limpio)) {
      limpio = limpio.slice(2);
      esHex = true;
    } else if (/[a-fA-F]/.test(limpio)) {
      esHex = true;
    }

    if (limpio === '' || !/^[0-9a-fA-F]+$/.test(limpio)) {
      return null;
    }

    const numero = parseInt(limpio, esHex ? 16 : 10);
    return Math.min(255, Math.max(0, numero));
  }
}
