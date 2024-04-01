import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

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
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.site = 'jw.org';

    this.cursos = this.cursosService.getCursos();
  }
}
