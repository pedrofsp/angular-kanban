import { Component } from '@angular/core';
import { BoardComponent } from '../../components/board-component';

@Component({
  standalone: true,
  imports: [BoardComponent],
  selector: 'home-page',
  template: `
    <div class="bg-info  text-white" style="height: 100vh;">
      <nav class="navbar navbar-dark bg-dark text-light">
        <div class="container">
          <h1>Generic Field Kanban</h1>
        </div>
      </nav>
      <div class="container">
        <br />
        <div class="d-flex">
          <board-component [title]="'titulo 1'"></board-component>
          <board-component [title]="'titulo 2'"></board-component>
        </div>
      </div>
    </div>
  `,
})
export class HomePage {}
