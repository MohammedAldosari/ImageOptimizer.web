import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-html-code',
  templateUrl: './html-code.component.html',
  styleUrls: ['./html-code.component.scss'],
})
export class HtmlCodeComponent implements OnInit {
  copiedStatus: boolean = false;
  @Input() htmlCode: string = ``;

  @Output() onFinish: EventEmitter<void> = new EventEmitter();

  options: any = { maxLines: 1000, printMargin: false };

  constructor(private _clipboardService: ClipboardService) {}

  ngOnInit(): void {}

  copyBtnOnClick() {
    this._clipboardService.copy(this.htmlCode);
    this.copiedStatus = true;
    setTimeout(() => {
      this.copiedStatus = false;
    }, 2000);
    this.onFinish.emit();
  }
}
