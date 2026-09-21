import { Component, computed, signal } from '@angular/core';
import { RecibirC } from './recibir-c/recibir-c';
import { IndicarC } from './indicar-c/indicar-c';
import { MostrarC } from './mostrar-c/mostrar-c';

@Component({
  selector: 'app-root',
  imports: [RecibirC, IndicarC, MostrarC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly r = signal(0);
  protected readonly g = signal(0);
  protected readonly b = signal(0);

  protected readonly colorHex = computed(
    () => `#${this.aHex(this.r())}${this.aHex(this.g())}${this.aHex(this.b())}`
  );

  protected readonly grisHex = computed(() => {
    const nivel = Math.round((this.r() + this.g() + this.b()) / 3);
    const hex = this.aHex(nivel);
    return `#${hex}${hex}${hex}`;
  });

  onColorRecibido(hex: string) {
    const limpio = hex.replace('#', '').trim();
    if (!/^[0-9a-fA-F]{6}$/.test(limpio)) {
      return;
    }

    this.r.set(parseInt(limpio.substring(0, 2), 16));
    this.g.set(parseInt(limpio.substring(2, 4), 16));
    this.b.set(parseInt(limpio.substring(4, 6), 16));
  }

  private aHex(valor: number): string {
    return valor.toString(16).padStart(2, '0').toUpperCase();
  }
}
