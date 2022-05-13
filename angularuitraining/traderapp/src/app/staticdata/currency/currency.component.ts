import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import { PhotoeditComponent } from './photoedit/photoedit.component';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit,AfterViewInit {

  photos:any;
  @ViewChild(MatPaginator, {static: false}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private customerService:CustomerService,
              private matDialog:MatDialog) { }


  displayedColumns: string[] = ['id', 'title',
    'url','thumbnailUrl','edit','delete'];
  tableSource = new MatTableDataSource();
  ngOnInit(): void {
    this.customerService.getPhotos().subscribe(response=>
      {
        console.log(response);
        this.photos=response.slice(1,100);
        this.tableSource.data = this.photos;
      }
    )
  }

  ngAfterViewInit() {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }

  openDialog(elem:any) {
    const dialogRef=this.matDialog.open(PhotoeditComponent,{
      width: '500px',
      data: {
        id:elem.id,
        title: elem.title
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      //this.updateRowData(result);
    });
  }
}
