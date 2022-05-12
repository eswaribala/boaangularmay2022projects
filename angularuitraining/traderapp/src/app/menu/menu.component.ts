import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'trader-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  receivedData:any;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.receivedData=this.menuService.getMenuData();
  }


}
