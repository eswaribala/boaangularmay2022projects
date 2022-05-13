import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-libor',
  templateUrl: './libor.component.html',
  styleUrls: ['./libor.component.css']
})
export class LiborComponent implements OnInit {

  oilData:any
  searchData: any=100;
  constructor(private countryService:CountryService) {

  }

  ngOnInit(): void {
    this.countryService.getNasDaqData().subscribe(response=>{
      this.oilData=response.dataset.data.slice(1,100);
      console.log(this.oilData);
    })

  }

}
