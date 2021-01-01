import { Component } from '@angular/core';
import * as ace from 'ace-builds/src-noconflict/ace';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ImageOptimizer';
  constructor() {
    ace.config.set('basePath', '');
    ace.config.set('modePath', '');
    ace.config.set('themePath', '');

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
