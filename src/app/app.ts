import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('simran-portfolio');

  currentScreen = signal('home');

  openProjects() {
    this.currentScreen.set('projects');
  }

  openExperience() {
    this.currentScreen.set('experience');
    
  }
  goHome() {
    this.currentScreen.set('home');
  }

}