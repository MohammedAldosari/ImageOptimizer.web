import { Component, OnInit } from '@angular/core';
import { AppResponseDto } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numberOfSteps = 3;
  activeStep = 1;

  appResponseDto: AppResponseDto;
  constructor() {}

  ngOnInit(): void {}

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
