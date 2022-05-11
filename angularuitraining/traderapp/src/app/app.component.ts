import { Component } from '@angular/core';

@Component({
  selector: 'trader-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoPath:string;
  banner:string;
  constructor() {
    this.logoPath="../assets/images/logo.png";
    this.banner="../assets/images/banner.jpg";
  }
}
