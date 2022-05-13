import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit,AfterViewInit  {

  photos:any;
  @ViewChild(MatPaginator, {static: false}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private customerService:CustomerService) { }
  displayedColumns: string[] = ['id', 'title',
    'url','thumbnailUrl','edit','delete'];
  tableSource = new MatTableDataSource();


  ngOnInit(): void {
        this.customerService.getPhotos().subscribe(response=>{
          this.photos=response.slice(1,100);
          console.log(this.photos.length);
          this.tableSource=this.photos;
        })
    }
  ngAfterViewInit(): void {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;
  }






}
