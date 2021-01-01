import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss'],
})
export class FileDownloadComponent implements OnInit {
  @Input() fileNmae: string;

  @Output() onFinish: EventEmitter<void> = new EventEmitter();
  isLoading = false;

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {}

  download() {
    this.isLoading = true;
    // download file
    this.downloadService().subscribe(
      (res) => {
        this.isLoading = false;
        const blob = new Blob([res], {
          type: 'application/zip',
        });
        const file = new File([blob], this.fileNmae, {
          type: 'application/zip',
        });
        saveAs(file);
        this.onFinish.emit();
      },
      (err) => {
        this.isLoading = false;
        console.error(err);
        // notify error
      }
    );
  }

  downloadService(): Observable<any> {
    return this.httpClient.get(
      `${environment.apiURL}/download/${this.fileNmae}`,
      { responseType: 'blob' }
    );
  }
}
