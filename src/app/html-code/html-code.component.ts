import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-html-code',
  templateUrl: './html-code.component.html',
  styleUrls: ['./html-code.component.scss'],
})
export class HtmlCodeComponent implements OnInit {
  copiedStatus: boolean = false;
  @Input() htmlCode: string = `
     <picture>
        <!-- load webp in different sizes if browser supports it -->
        <source media="(max-width: 480px)" srcset="Screenshot_20231212_152646_Absher-480.webp" type="image/webp">
        <source media="(max-width: 767px)" srcset="Screenshot_20231212_152646_Absher-767.webp" type="image/webp">
        <source media="(min-width: 768px)" srcset="Screenshot_20231212_152646_Absher-full.webp" type="image/webp">

        <!-- load jpg in different sizes if browser doesn't support webp -->
        <source media="(max-width: 480px)" srcset="Screenshot_20231212_152646_Absher-480.jpg" type="image/jpeg">
        <source media="(max-width: 767px)" srcset="Screenshot_20231212_152646_Absher-767.jpg" type="image/jpeg">
        <source media="(min-width: 768px)" srcset="Screenshot_20231212_152646_Absher-full.jpg" type="image/jpeg">

        <!--  fallback in different sizes, as well as regular src. -->
        <img srcset="Screenshot_20231212_152646_Absher-480.jpg 480w, Screenshot_20231212_152646_Absher-767.jpg 767w" sizes="(max-width: 480px) 480px,
            (max-width: 767px) 768px" src="Screenshot_20231212_152646_Absher-full.jpg" alt="image description">

     </picture>`;

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
