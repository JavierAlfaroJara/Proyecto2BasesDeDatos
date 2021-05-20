import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.css']
})
export class ChartDialogComponent implements OnInit {

  idN: any;
  ventas: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ChartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.idN = data.idN;
      this.ventas = data.ventas;
    }

    ngOnInit() {
    }

    // Cierra dialogo
    close(): void{
    this.dialogRef.close();
    }

  }