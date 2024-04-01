import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
  espacamentoCss: string = '1.5rem';

  estilos(): string {
    return `
      padding-left: 1rem;
      color: blue;
    `
  }
}
