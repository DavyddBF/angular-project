import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {
  id: string;

  constructor(private rotas: ActivatedRoute) {
    this.id = this.rotas.snapshot.params['id'];
  }
}
