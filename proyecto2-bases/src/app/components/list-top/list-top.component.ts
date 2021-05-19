import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-list-top',
  templateUrl: './list-top.component.html',
  styleUrls: ['./list-top.component.css']
})
export class ListTopComponent implements AfterViewInit {
  displayedColumns: string[] = ['idProducto', 'nombreProducto', 'vendidos'];
  dataSource = new MatTableDataSource<Stock>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor( public apiService:ApiServiceService, ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Stock {
  idProducto: number; 
  nombreProducto: string;
  vendidos: number;
}

const ELEMENT_DATA: Stock[] = [
  {idProducto: 1, nombreProducto: 'Hydrogen', vendidos: 1.0079},
  {idProducto: 2, nombreProducto: 'Helium', vendidos: 4.0026},
  {idProducto: 3, nombreProducto: 'Lithium', vendidos: 6.941},
  {idProducto: 4, nombreProducto: 'Beryllium', vendidos: 9.0122},
  {idProducto: 5, nombreProducto: 'Boron', vendidos: 10.811},
  {idProducto: 6, nombreProducto: 'Carbon', vendidos: 12.0107},
  {idProducto: 7, nombreProducto: 'Nitrogen', vendidos: 14.0067},
  {idProducto: 8, nombreProducto: 'Oxygen', vendidos: 15.9994},
  {idProducto: 9, nombreProducto: 'Fluorine', vendidos: 18.9984},
  {idProducto: 10, nombreProducto: 'Neon', vendidos: 20.1797},
  {idProducto: 11, nombreProducto: 'Sodium', vendidos: 22.9897},
  {idProducto: 12, nombreProducto: 'Magnesium', vendidos: 24.305},
  {idProducto: 13, nombreProducto: 'Aluminum', vendidos: 26.9815},
  {idProducto: 14, nombreProducto: 'Silicon', vendidos: 28.0855},
  {idProducto: 15, nombreProducto: 'Phosphorus', vendidos: 30.9738},
  {idProducto: 16, nombreProducto: 'Sulfur', vendidos: 32.065},
  {idProducto: 17, nombreProducto: 'Chlorine', vendidos: 35.453},
  {idProducto: 18, nombreProducto: 'Argon', vendidos: 39.948},
  {idProducto: 19, nombreProducto: 'Potassium', vendidos: 39.0983},
  {idProducto: 20, nombreProducto: 'Calcium', vendidos: 40.078},
];
