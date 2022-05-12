import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TradebookingComponent} from "./tradebooking/tradebooking.component";
import {EconomicComponent} from "./tradebooking/economic/economic.component";
import {NoneconomicComponent} from "./tradebooking/noneconomic/noneconomic.component";


const routes: Routes = [
  {
    path:'TradeBooking',
    component:TradebookingComponent,
    children:[{
      path:'Economic',
      component: EconomicComponent
    },
      {
        path:'NonEconomic',
        component: NoneconomicComponent
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
