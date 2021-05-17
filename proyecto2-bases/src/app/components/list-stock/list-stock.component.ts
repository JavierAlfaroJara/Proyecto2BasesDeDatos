import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements AfterViewInit {
  displayedColumns: string[] = ['idProducto', 'nombreProducto', 'cantidad', 'idNodo'];
  dataSource = new MatTableDataSource<Stock>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Stock {
  idProducto: number; 
  nombreProducto: string;
  cantidad: number;
  idNodo: number;
}

const ELEMENT_DATA: Stock[] = [
  {idProducto: 1, nombreProducto: 'Hydrogen', cantidad: 1.0079, idNodo: 5},
  {idProducto: 2, nombreProducto: 'Helium', cantidad: 4.0026, idNodo: 7},
  {idProducto: 3, nombreProducto: 'Lithium', cantidad: 6.941, idNodo: 8},
  {idProducto: 4, nombreProducto: 'Beryllium', cantidad: 9.0122, idNodo: 8},
  {idProducto: 5, nombreProducto: 'Boron', cantidad: 10.811, idNodo: 1},
  {idProducto: 6, nombreProducto: 'Carbon', cantidad: 12.0107, idNodo: 2},
  {idProducto: 7, nombreProducto: 'Nitrogen', cantidad: 14.0067, idNodo: 3},
  {idProducto: 8, nombreProducto: 'Oxygen', cantidad: 15.9994, idNodo: 1},
  {idProducto: 9, nombreProducto: 'Fluorine', cantidad: 18.9984, idNodo: 7},
  {idProducto: 10, nombreProducto: 'Neon', cantidad: 20.1797, idNodo: 4},
  {idProducto: 11, nombreProducto: 'Sodium', cantidad: 22.9897, idNodo: 7},
  {idProducto: 12, nombreProducto: 'Magnesium', cantidad: 24.305, idNodo: 3},
  {idProducto: 13, nombreProducto: 'Aluminum', cantidad: 26.9815, idNodo: 5},
  {idProducto: 14, nombreProducto: 'Silicon', cantidad: 28.0855, idNodo: 7},
  {idProducto: 15, nombreProducto: 'Phosphorus', cantidad: 30.9738, idNodo: 8},
  {idProducto: 16, nombreProducto: 'Sulfur', cantidad: 32.065, idNodo: 7},
  {idProducto: 17, nombreProducto: 'Chlorine', cantidad: 35.453, idNodo: 3},
  {idProducto: 18, nombreProducto: 'Argon', cantidad: 39.948, idNodo: 6},
  {idProducto: 19, nombreProducto: 'Potassium', cantidad: 39.0983, idNodo: 6},
  {idProducto: 20, nombreProducto: 'Calcium', cantidad: 40.078, idNodo: 4},
];
