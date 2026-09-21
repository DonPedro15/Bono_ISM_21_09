import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mostrar-c',
  styleUrl: './mostrar-c.css',
  templateUrl: './mostrar-c.html',
})
export class MostrarC {
  readonly color = input('#ffffff');
  readonly gris = input('#ffffff');
}
