import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { HtmlCodeComponent } from './html-code/html-code.component';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';
// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { HttpClientModule } from '@angular/common/http';
import { AceEditorModule } from 'ng2-ace-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';
// Register the plugin
registerPlugin(FilePondPluginImagePreview);

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
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
    NavbarModule,
    WavesModule,
    ClipboardModule,
    FilePondModule,
    AceEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
