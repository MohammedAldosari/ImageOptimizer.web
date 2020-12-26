import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-html-code',
  templateUrl: './html-code.component.html',
  styleUrls: ['./html-code.component.scss'],
})
export class HtmlCodeComponent implements OnInit {
  copiedStatus: boolean = false;
  @Input() htmlCode: string;

  @Output() onFinish: EventEmitter<void> = new EventEmitter();

  options: any = { maxLines: 1000, printMargin: false };

  constructor() {}

  ngOnInit(): void {}

  copyBtnOnClick() {
    this.copiedStatus = true;
    setTimeout(() => {
      this.copiedStatus = false;
    }, 2000);
    this.onFinish.emit();
  }
}
