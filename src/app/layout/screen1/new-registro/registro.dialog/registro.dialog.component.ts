import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-registrodialog',
  templateUrl: './registro.dialog.component.html',
  styleUrls: ['./registro.dialog.component.scss']
})
export class RegistroDialogComponent implements OnInit {

  constructor(
      public dialog: MatDialogRef<RegistroDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public id: number,
  ) { }

  ngOnInit(): void {
  }

}
