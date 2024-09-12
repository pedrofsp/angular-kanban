import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './views/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-kanban-frontend';
}
