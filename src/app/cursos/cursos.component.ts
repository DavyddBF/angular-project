import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  site: string;
  cursos: string[] = ['Java', 'JS', 'Python', 'Ruby'];

  constructor() {
    this.site = 'jw.org';
  }
}
