import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {filter, map, take} from "rxjs/operators";
@Component({
  selector: 'trader-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  logoPath:string;
  banner:string;
  isLogged:boolean;
  private token_key:any;
  private auth_user:any;
  constructor(private authService:AuthService,private router:Router) {
    this.logoPath="../assets/images/logo.png";
    this.banner="../assets/images/banner.jpg";
    this.isLogged=false;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        console.log("Route changes.....");
        this.token_key=this.authService.getAuthToken();
        this.auth_user=this.authService.getUserName();
        if(this.token_key.length>1 && this.auth_user.length>1)
          this.isLogged=true;


      })

  }



}
