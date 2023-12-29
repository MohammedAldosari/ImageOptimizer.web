import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { HtmlCodeComponent } from './html-code/html-code.component';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';
// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ClipboardModule } from 'ngx-clipboard';
import { StepsModule } from 'primeng/steps';
import { AceEditorModule } from 'ngx-ace-editor-wrapper';

// Register the plugin
registerPlugin(FilePondPluginImagePreview);
registerPlugin(FilePondPluginFileValidateType);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileUploadComponent,
    FileDownloadComponent,
    HtmlCodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StepsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
    ClipboardModule,
    FilePondModule,
    AceEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
