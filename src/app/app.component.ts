import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeFilmsComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projet1';
}
