import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  url: string = 'jw.org';
  valor1: number = 3;
  valor2: number = 10;

  boleano: boolean = true;

  getValor(): number {
    return 1;
  }

  getTrueOrFalse(): string {
    if(this.boleano && true) {
      return 'Verdadeiro';
    } else {
      return 'Falso'
    }
  }

  getTemplate() {
    const codigo =  ` 
      <h1>Site: {{ url }}</h1>
      <h2>Visite o site <a href="{{ url }}">jw.org</a></h2>
      <h2>Visite o site <a [href]="url">jw.org</a></h2>
      <h2>Operações Matemáticas:  {{ valor1 }} + {{ valor2 }} = {{ valor1 + valor2 }}</h2>
      <h2>A conta  {{ valor1 }} + {{ valor2 }} não dá {{ valor1 + valor2 + getValor() }}</h2>
      <h2>Isso e isso é {{ getTrueOrFalse() }}</h2>
    `
    return document.querySelector('.test')!.innerHTML = codigo;
  }
}
