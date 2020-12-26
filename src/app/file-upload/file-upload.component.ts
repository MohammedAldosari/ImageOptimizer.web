import { environment } from './../../environments/environment';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { AppResponseDto } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Output() onFinish: EventEmitter<AppResponseDto> = new EventEmitter();
  file: File;

  isLoading = false;
  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle:
      '<p class="pointer"><strong>Choose image</strong><span> or drag it here</span>.</p>',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowImagePreview: true,
  };
  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
    this.file = event.file.file;
  }
  upload() {
    this.isLoading = true;

    const formData = new FormData();
    formData.append('file', this.file);

    this.httpClient
      .post<AppResponseDto>(`${environment.apiURL}/upload`, formData)
      .subscribe(
        (res) => {
          this.onFinish.emit(res);
        },
        (err: HttpErrorResponse) => {
          console.error(err.error.message);
          this.toastrService.error(err.error.message, 'Error', {
            progressBar: true,
            closeButton: true,
          });
        }
      )
      .add(() => {
        //Called when operation is complete (both success and error)
        this.isLoading = false;
      });
  }
}
