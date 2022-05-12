import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'trader-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model=new Login("","");
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {

  }

  login($event: Event) {
    console.log(this.model)

   let loginObj= {
      "username": this.model.userName,
      "password": this.model.password
    }
    this.customerService.sendLoginData(loginObj).subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    })

  }
}
