import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-searchcustomer',
  templateUrl: 'searchcustomer.component.html',
  styleUrls: ['searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {
id:any;
customerData:any
  constructor(private route:ActivatedRoute,
              private customerService:CustomerService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.customerService.getCustomerData(this.id).subscribe(response=>{
      console.log(response);
      this.customerData=response;
    })

  }

}
