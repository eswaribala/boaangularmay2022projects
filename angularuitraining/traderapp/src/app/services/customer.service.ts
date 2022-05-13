import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EMPTY, Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const AUTH_API = 'https://localhost:44392/api/v1/customer';
const LOGIN_API= 'https://localhost:44392/api/v1/Authenticate/login';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) {

  }

  sendCustomerData(customerObj:any):Observable<any>{

    return this.httpClient.post(AUTH_API,
      customerObj).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }

  sendLoginData(loginObj:any):Observable<any>{

    return this.httpClient.post(LOGIN_API,
      loginObj).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );

  }

  getCustomerData(customerId:any):Observable<any>{
   return this.httpClient.get(AUTH_API+"/"+customerId);
  }

}
