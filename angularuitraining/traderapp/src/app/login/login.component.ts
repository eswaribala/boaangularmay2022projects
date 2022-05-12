import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";

@Component({
  selector: 'trader-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model=new Login("","");
  constructor() { }

  ngOnInit(): void {
  }

}
