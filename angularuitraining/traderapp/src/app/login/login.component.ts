import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";
import {CustomerService} from "../services/customer.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'trader-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model=new Login("","");
  constructor(private customerService:CustomerService,
              private authService:AuthService,
              private router:Router) { }

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
      if(response["token"].length>0){
        console.log("Token Ready....")
        this.authService.setAuthToken(response["token"]);
        this.authService.setUserName(loginObj.username);
        this.router.navigate(['/Menu']);
      }

    },error=>{
      console.log(error);
    })

  }
}
