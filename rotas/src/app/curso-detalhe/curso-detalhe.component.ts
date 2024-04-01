import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {
  id: string = '';
  inscricao: Subscription = new Subscription();

  constructor(private rotas: ActivatedRoute) {
    //this.id = this.rotas.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.rotas.params.subscribe(
      (parametro: any) => {
        this.id = parametro['id'];
    });
  }

  ngOnDestroy():void {
    this.inscricao.unsubscribe();
  }
}
