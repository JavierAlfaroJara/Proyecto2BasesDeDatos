import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiServiceService } from '../../../services/api-service.service';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.css']
})
export class ChartDialogComponent implements OnInit {

  idN: any;
  ventas: number[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = [
    "Hace 1 mes",
    "Hace 2 meses",
    "Hace 3 meses",
    "Hace 4 meses",
    "Hace 5 meses",
    "Hace 6 meses",
    "Hace 7 meses",
    "Hace 8 meses",
    "Hace 9 meses",
    "Hace 10 meses",
    "Hace 11 meses",
    "Hace 12 meses"
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: this.ventas, label: 'Ventas del mes' }
  ];

  constructor(
    public apiService:ApiServiceService,
    public dialogRef: MatDialogRef<ChartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.idN = data.idN;
    }

    ngOnInit() {
      console.log(this.idN)
      this.loadData(this.idN)
      console.log(this.ventas)
    }
    //Carga los datos de la ventas
    loadData(idNodo): void{

      this.apiService.getRegistroMensual(idNodo).subscribe((res) =>
        {
          let temp: number[] = [];
          let index =0
          while(index < res.body.length){
            let venta = res.body[index].cantidad_ventas
            this.ventas.push(venta)
            index++
          }
        
          /* for(let index = 0; index < res.body.leght; index++){
            const actual = res.body[index];
            console.log("Mamapenes")
            temp.push(actual.cantidad_ventas )
          } */
          console.log("despues del for")
        }
      )
    }

    // Cierra dialogo
    close(): void{
    this.dialogRef.close();
    }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  }