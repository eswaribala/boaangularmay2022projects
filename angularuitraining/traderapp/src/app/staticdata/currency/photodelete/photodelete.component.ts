import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-photodelete',
  templateUrl: './photodelete.component.html',
  styleUrls: ['./photodelete.component.css']
})
export class PhotodeleteComponent implements OnInit {

  constructor( public matDialogRef: MatDialogRef<PhotodeleteComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.matDialogRef.close();
  }
}
