import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-photoedit',
  templateUrl: './photoedit.component.html',
  styleUrls: ['./photoedit.component.css']
})
export class PhotoeditComponent implements OnInit {

  constructor( public matDialogRef: MatDialogRef<PhotoeditComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.matDialogRef.close();
  }
}
