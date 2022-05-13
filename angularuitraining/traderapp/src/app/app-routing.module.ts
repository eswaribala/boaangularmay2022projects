import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StaticdataComponent} from "./staticdata/staticdata.component";
import {CustomerComponent} from "./staticdata/customer/customer.component";
import {CurrencyComponent} from "./staticdata/currency/currency.component";
import {CalendarComponent} from "./staticdata/calendar/calendar.component";
import {BankComponent} from "./staticdata/bank/bank.component";
import {MarketdataComponent} from "./marketdata/marketdata.component";
import {LiborComponent} from "./marketdata/libor/libor.component";
import {ForexComponent} from "./marketdata/forex/forex.component";

import {LogoutComponent} from "./logout/logout.component";
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {SearchcustomerComponent} from "./staticdata/searchcustomer/searchcustomer.component";


const routes: Routes = [
  {
    path:'Login',
    component:LoginComponent
  },

  {
  path:'Menu',
  component:MenuComponent,
  children:[
    {
      path:'StaticData',
      component:StaticdataComponent,
      children:[{
        path:'Customer',
        component: CustomerComponent
      },
        {
          path:'SearchCustomer/:id',
          component: SearchcustomerComponent
        },
        {
          path:'Currency',
          component: CurrencyComponent
        },
        {
          path:'Calendar',
          component: CalendarComponent
        },
        {
          path:'Bank',
          component: BankComponent
        }
      ]
    },
    {
      path:'MarketData',
      component:MarketdataComponent,
      children:[{
        path:'LIBOR',
        component: LiborComponent
      },
        {
          path:'FOREX',
          component: ForexComponent
        }
      ]
    },
    {
      path: 'Trading',
      loadChildren: () => import('./trading/trading.module')
        .then(m => m.TradingModule)

    },

    {
      path:'Logout',
      component:LogoutComponent


  }

  ]
},

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
