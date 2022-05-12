import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TradebookingComponent} from "./tradebooking/tradebooking.component";
import {NoneconomicComponent} from "./tradebooking/noneconomic/noneconomic.component";
import {EconomicComponent} from "./tradebooking/economic/economic.component";
import {TradeRoutingModule} from "./trading-routing.module";



@NgModule({
  declarations: [
    TradebookingComponent,
    NoneconomicComponent,
    EconomicComponent
  ],
  imports: [
    CommonModule,
    TradeRoutingModule

  ]
})
export class TradingModule {

}
