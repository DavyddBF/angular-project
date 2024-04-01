import { CommonModule } from '@angular/common';
import { Component, InputOptions } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
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




  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver:boolean = false;

  onKeyUp(event: KeyboardEvent):void {
    this.valorAtual = (event.target as HTMLInputElement).value;
  }

  numSalvo(event: string): void {
    this.valorSalvo = event;
  }
  
  onMouseOverOut():void {
    this.isMouseOver = !this.isMouseOver;
  }

  nome: string | Event = 'abc';

  pessoa: Pessoa = {
    nome: 'Davyd',
    idade: 18
  }

  teste():void {
    console.log('Clicado');
  }
}
