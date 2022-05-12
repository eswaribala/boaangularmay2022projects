import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError,
  NavigationStart, Router,Event} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {filter, map, take} from "rxjs/operators";
import {Observable, Observer} from "rxjs";
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
  loading = true;
  comments:any;
  time = new Observable<String>((observer: Observer<String>) => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });
  today: number = Date.now();
  readonly loading$: Observable<boolean> = this.router.events.pipe(
    map((event) => this.checkRouterEvent(event))
  );
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
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
          this.loading=false;
        }

      })

  }

  checkRouterEvent(routerEvent: Event): boolean {
    let status:boolean = false;
    if (routerEvent instanceof NavigationStart) {
      status=true;
      console.log(status);
    }

    if (routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationError) {
      status=false
      console.log(status);
    }
    console.log(status);
    return status;
  }

}
