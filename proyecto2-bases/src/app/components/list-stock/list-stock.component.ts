import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements AfterViewInit {
  stockProductos:Stock[] = []
  displayedColumns: string[] = ['idProducto', 'nombreProducto', 'cantidad', 'idNodo', 'actions'];
  dataSource = new MatTableDataSource<Stock>(this.stockProductos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( public apiService:ApiServiceService, ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllStockProducts()
  }

  updateProduct(idNodo, idProducto){
    this.apiService.changeAlerta(idNodo,idProducto).subscribe((res) => 
    {
      for (let index = 0; index < this.stockProductos.length; index++) {
        const actual = this.stockProductos[index];
        if((actual.idNodo == idNodo ) && (actual.idProducto == idProducto)){
          actual.isChecked = res.body[0]
        }
      }
    })
  }
  
  getAllStockProducts(){
    this.apiService.getAllStockProductos().subscribe((res)=>
    {
      let temp:Stock[] = []
       for (let index = 0; index < res.body.length; index++) {
         const actual = res.body[index];
 
         const json = {
          idProducto: actual.id_producto, 
          nombreProducto: actual.nombre_producto, 
          cantidad: actual.cantidad_stock_productos,
          idNodo: actual.id_nodo,
          isChecked: actual.alerta
         };
         temp.push(json)
       }
       this.stockProductos = temp
       this.dataSource.data = this.stockProductos
       this.dataSource.paginator = this.paginator
    })
   }
}

export interface Stock {
  idProducto: number; 
  nombreProducto: string;
  cantidad: number;
  idNodo: number;
  isChecked: boolean
}

const ELEMENT_DATA: Stock[] = [
  {idProducto: 1, nombreProducto: 'Hydrogen', cantidad: 1.0079, idNodo: 5, isChecked: true},
  {idProducto: 2, nombreProducto: 'Helium', cantidad: 4.0026, idNodo: 7, isChecked: false},
  {idProducto: 3, nombreProducto: 'Lithium', cantidad: 6.941, idNodo: 8, isChecked: true},
  {idProducto: 4, nombreProducto: 'Beryllium', cantidad: 9.0122, idNodo: 8, isChecked: true},
  {idProducto: 5, nombreProducto: 'Boron', cantidad: 10.811, idNodo: 1, isChecked: true},
  {idProducto: 6, nombreProducto: 'Carbon', cantidad: 12.0107, idNodo: 2, isChecked: true},
  {idProducto: 7, nombreProducto: 'Nitrogen', cantidad: 14.0067, idNodo: 3, isChecked: true},
  {idProducto: 8, nombreProducto: 'Oxygen', cantidad: 15.9994, idNodo: 1, isChecked: true},
  {idProducto: 9, nombreProducto: 'Fluorine', cantidad: 18.9984, idNodo: 7, isChecked: true},
  {idProducto: 10, nombreProducto: 'Neon', cantidad: 20.1797, idNodo: 4, isChecked: true},
  {idProducto: 11, nombreProducto: 'Sodium', cantidad: 22.9897, idNodo: 7, isChecked: true},
  {idProducto: 12, nombreProducto: 'Magnesium', cantidad: 24.305, idNodo: 3, isChecked: true},
  {idProducto: 13, nombreProducto: 'Aluminum', cantidad: 26.9815, idNodo: 5, isChecked: true},
  {idProducto: 14, nombreProducto: 'Silicon', cantidad: 28.0855, idNodo: 7, isChecked: true},
  {idProducto: 15, nombreProducto: 'Phosphorus', cantidad: 30.9738, idNodo: 8, isChecked: true},
  {idProducto: 16, nombreProducto: 'Sulfur', cantidad: 32.065, idNodo: 7, isChecked: true},
  {idProducto: 17, nombreProducto: 'Chlorine', cantidad: 35.453, idNodo: 3, isChecked: true},
  {idProducto: 18, nombreProducto: 'Argon', cantidad: 39.948, idNodo: 6, isChecked: true},
  {idProducto: 19, nombreProducto: 'Potassium', cantidad: 39.0983, idNodo: 6, isChecked: true},
  {idProducto: 20, nombreProducto: 'Calcium', cantidad: 40.078, idNodo: 4, isChecked: true},
];
