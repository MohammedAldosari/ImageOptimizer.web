import { Component, OnInit } from '@angular/core';
import { AppResponseDto } from '../interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeStep = 0;
  items: MenuItem[] | undefined;

  appResponseDto: AppResponseDto;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Upload Image',
      },
      {
        label: 'Download Optimized Images',
      },
      {
        label: 'Html Code',
      },
    ];
  }

  step1Finish(_appResponseDto: AppResponseDto) {
    this.appResponseDto = _appResponseDto;
    this.next();
  }
  next() {
    this.activeStep = this.activeStep + 1;
  }
  back() {
    this.activeStep = this.activeStep - 1;
  }
}
