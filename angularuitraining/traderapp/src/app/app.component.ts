import { Component } from '@angular/core';

@Component({
  selector: 'trader-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoPath:string;
  constructor() {
    this.logoPath="../assets/images/logo.png"
  }
}
