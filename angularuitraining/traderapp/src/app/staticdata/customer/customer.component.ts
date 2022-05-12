import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../services/country.service";
import {CustomerService} from "../../services/customer.service";

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
   countries:any;
   isSuccess:boolean=false;
  constructor(private formBuilder:FormBuilder,
              private countryService:CountryService,
              private customerService:CustomerService) {

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
    this.countryService.getCountries().subscribe(response=>{
      this.countries=response;

      this.countries.forEach((country:any)=>{
        console.log(country["name"]);
      })
    })
  }

  saveCustomer() {
    console.log(this.customerForm.value);
    if(!this.isSuccess)
     this.isSuccess=true;
   let customerObj= {
      "customerId": 0,
      "name": {
      "firstName": this.customerForm.value.firstName,
        "lastName": this.customerForm.value.lastName,
        "middleName": this.customerForm.value.middleName
    },
      "country": this.customerForm.value.country
    }

    console.log(customerObj);
   this.customerService.sendCustomerData(customerObj).subscribe(response=>{
     console.log(response);
   },error=>{
     console.log(error);
   })
  }
}
