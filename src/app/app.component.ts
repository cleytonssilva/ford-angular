import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Adicione esta linha
  templateUrl: '../app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet] // Mantenha esta linha
})
export class AppComponent {
  title = 'desafio-ford-angular';
}
