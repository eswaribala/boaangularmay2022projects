import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   firstName:FormControl;
   middleName:FormControl;
   lastName:FormControl;
   country:FormControl;
   customerForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.firstName=new FormControl('',
      [Validators.required,Validators.pattern("[A-Za-z]{5,25}")]);
    this.middleName=new FormControl('',
      [Validators.pattern("[A-Za-z]{0,25}")]);
    this.lastName=new FormControl('',
      [Validators.required,Validators.pattern("[A-Za-z]{5,25}")]);
    this.country=new FormControl('',
      [Validators.required,Validators.pattern("[A-Za-z]{3,50}")]);

   this.customerForm= formBuilder.group({
      firstName:this.firstName,
      lastName:this.lastName,
      middleName:this.middleName,
      country:this.country
    })
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    console.log(this.customerForm.value);
  }
}
