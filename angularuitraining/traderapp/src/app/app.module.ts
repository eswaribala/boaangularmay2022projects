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
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { LoginComponent } from './login/login.component';
import {SearchcustomerComponent} from "./staticdata/searchcustomer/searchcustomer.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";



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
    LogoutComponent,
    LoginComponent,
    SearchcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
