import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private _apiURL ="https://localhost:44395/api" 
  constructor(private http: HttpClient) { }

  // obtiene todo los nodos
  getNodos() : Observable<any>{
    console.log("Algo pasa ")
   return this.http.get(`${this._apiURL}/nodos/`, {
     observe: "response"
 });
 }
  //Obtiene las ventas de un nodo en los ultimos 12 meses
  getRegistroMensual(idNodo: any ) : Observable<any>{
    console.log("Algo pasa ")
    return this.http.get(`${this._apiURL}/registroMensual/${idNodo}`, {
      observe: "response"
  });
  }

  //Cambia la alerta de tipo boolean (FALSE -> TRUE or TRUE -> FALSE)
  changeAlerta(idNodo: any ,idProducto: any) : Observable<any>{
    console.log("Algo pasa ")
    return this.http.get(`${this._apiURL}/stockProductos/${idNodo}/${idProducto}`, {
      observe: "response"
  });
  }

  //Obtiene todo el stock de los productos que se estan acabando
  getAllStockProductos() : Observable<any>{
    console.log("Algo pasa ")
    return this.http.get(`${this._apiURL}/stockProductos`, {
      observe: "response"
  });
  }

  //obtiene el top 10 de los productos mas vendidos en los ultimos 3 meses 
  getTopProductos(idNodo: any ,idProducto: any) : Observable<any>{
    console.log("Algo pasa ")
    return this.http.get(`${this._apiURL}/topProductos`, {
      observe: "response"
  });
  }

}
