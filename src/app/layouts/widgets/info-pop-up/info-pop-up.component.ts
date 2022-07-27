import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-pop-up',
  templateUrl: './info-pop-up.component.html',
  styleUrls: ['./info-pop-up.component.scss'],
})
export class InfoPopUpComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<InfoPopUpComponent>
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 1500);
  }
}
