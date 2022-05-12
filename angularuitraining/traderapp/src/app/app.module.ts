import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import { MenuComponent } from './menu/menu.component';
import { StaticdataComponent } from './staticdata/staticdata.component';
import { CustomerComponent } from './staticdata/customer/customer.component';
import { CurrencyComponent } from './staticdata/currency/currency.component';
import { CalendarComponent } from './staticdata/calendar/calendar.component';
import { BankComponent } from './staticdata/bank/bank.component';
import { MarketdataComponent } from './marketdata/marketdata.component';
import { LiborComponent } from './marketdata/libor/libor.component';
import { ForexComponent } from './marketdata/forex/forex.component';
import { TradebookingComponent } from './tradebooking/tradebooking.component';
import { NoneconomicComponent } from './tradebooking/noneconomic/noneconomic.component';
import { EconomicComponent } from './tradebooking/economic/economic.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StaticdataComponent,
    CustomerComponent,
    CurrencyComponent,
    CalendarComponent,
    BankComponent,
    MarketdataComponent,
    LiborComponent,
    ForexComponent,
    TradebookingComponent,
    NoneconomicComponent,
    EconomicComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
