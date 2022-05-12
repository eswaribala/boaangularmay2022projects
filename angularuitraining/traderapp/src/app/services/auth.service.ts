import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    window.sessionStorage.setItem('Auth_Token','');
    window.sessionStorage.setItem('User_Name','');
  }

  setAuthToken(token:any){
    window.sessionStorage.setItem('Auth_Token',token);

  }
  setUserName(userName:any){
    window.sessionStorage.setItem('User_Name',userName);
  }

  getAuthToken(){
    return window.sessionStorage.getItem("Auth_Token");
  }
  getUserName(){
    return window.sessionStorage.getItem("User_Name");
  }
}
