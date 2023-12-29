import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ImageOptimizer';
  constructor() {
    const consoleStyle = [
      'color: #3C78DC',
      'text-shadow: 1px 1px #0043af',
      'font-size: 2em',
      'border: 1px solid #0043af',
      'padding: 20px',
      'font-family: cursive',
    ].join(';');
    console.log('%cMade by Mohammed Aldosari 😀', consoleStyle);
  }
}
