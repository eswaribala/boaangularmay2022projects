import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }

  public getCountries():Observable<any>{
    return this.httpClient.get('https://restcountries.com/v2/all');
  }

  getNasDaqData():Observable<any>{
    return this.httpClient.get('https://data.nasdaq.com/api/v3/datasets/OPEC/ORB.json');
  }
}
