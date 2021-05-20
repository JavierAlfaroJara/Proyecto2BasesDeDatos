import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {ChartDialogComponent} from '../dialogs/chart-dialog/chart-dialog.component';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-list-nodes',
  templateUrl: './list-nodes.component.html',
  styleUrls: ['./list-nodes.component.css']
})
export class ListNodesComponent implements AfterViewInit {
  nodos: Nodo[] = [];
  ventas: any[] = [];
  displayedColumns: string[] = ['idN', 'nombre', 'ipN', 'usuario', 'actions'];
  dataSource = new MatTableDataSource<Nodo>(this.nodos);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( public apiService:ApiServiceService, public dialog: MatDialog ) {}
  data:Nodo[] = [] 

  ngAfterViewInit() {
    this.getListNodes()
  }

  getListNodes(){
   this.apiService.getNodos().subscribe((res)=>
   {
     let temp:Nodo[] = []
      for (let index = 0; index < res.body.length; index++) {
        const actual = res.body[index];

        const json = {
          idN: actual.id, 
          nombre: actual.nombre_base_datos, 
          ipN: actual.ip,
          usuario: actual.usuario
        };
        temp.push(json)
      }
      this.nodos = temp
      this.dataSource.data = this.nodos
      this.dataSource.paginator = this.paginator
   })
  }

  openDialog(idNodo): void{

    this.apiService.getRegistroMensual(idNodo).subscribe((res) =>
      {
        let temp: any[] = [];
        for(let index = 0; index < res.body.leght; index++){
          const actual = res.body[index];

          temp.push(actual.cantidad_ventas)
        }
        this.ventas = temp;

        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '550px';
        dialogConfig.data = {
          idN: idNodo,
          ventas: this.ventas
        }
        const dialogRef = this.dialog.open(ChartDialogComponent, dialogConfig);
      }
    )
  }
}

export interface Nodo {
  idN: number; 
  nombre: string;
  ipN: number;
  usuario: string;
};

// const ELEMENT_DATA: Nodo[] = [
//   {idN: 1, nombre: 'Hydrogen', ipN: 1.0079, usuario: 'H'},
//   {idN: 2, nombre: 'Helium', ipN: 4.0026, usuario: 'He'},
//   {idN: 3, nombre: 'Lithium', ipN: 6.941, usuario: 'Li'},
//   {idN: 4, nombre: 'Beryllium', ipN: 9.0122, usuario: 'Be'},
//   {idN: 5, nombre: 'Boron', ipN: 10.811, usuario: 'B'},
//   {idN: 6, nombre: 'Carbon', ipN: 12.0107, usuario: 'C'},
//   {idN: 7, nombre: 'Nitrogen', ipN: 14.0067, usuario: 'N'},
//   {idN: 8, nombre: 'Oxygen', ipN: 15.9994, usuario: 'O'},
//   {idN: 9, nombre: 'Fluorine', ipN: 18.9984, usuario: 'F'},
//   {idN: 10, nombre: 'Neon', ipN: 20.1797, usuario: 'Ne'},
//   {idN: 11, nombre: 'Sodium', ipN: 22.9897, usuario: 'Na'},
//   {idN: 12, nombre: 'Magnesium', ipN: 24.305, usuario: 'Mg'},
//   {idN: 13, nombre: 'Aluminum', ipN: 26.9815, usuario: 'Al'},
//   {idN: 14, nombre: 'Silicon', ipN: 28.0855, usuario: 'Si'},
//   {idN: 15, nombre: 'Phosphorus', ipN: 30.9738, usuario: 'P'},
//   {idN: 16, nombre: 'Sulfur', ipN: 32.065, usuario: 'S'},
//   {idN: 17, nombre: 'Chlorine', ipN: 35.453, usuario: 'Cl'},
//   {idN: 18, nombre: 'Argon', ipN: 39.948, usuario: 'Ar'},
//   {idN: 19, nombre: 'Potassium', ipN: 39.0983, usuario: 'K'},
//   {idN: 20, nombre: 'Calcium', ipN: 40.078, usuario: 'Ca'},
// ];
