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
  }
}
