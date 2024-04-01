import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CursosComponent,
    PropertyBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  testando = "Testando os codigos";
}
