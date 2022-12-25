import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Product} from '../modelo/product'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  RUTA:string="http://localhost:8080/api/api"
  constructor(private _http:HttpClient) { }

  public getProducts():Observable<Product[]>{
    var product:Product[]=[]
    return this._http.get<Product[]>(`${this.RUTA}/`).pipe()
    
  }
  public addProduct(product: Product){
    return this._http.post(`${this.RUTA}/agregarProducto`, product).subscribe(e => {
      console.log(e)
    })
  }
  public updateProduct(product: Product){
    var id = product.Id
    return this._http.put(`${this.RUTA}/modificarProducto/`, product).subscribe(e => {
      console.log(e)
    })
  }
  public getProduct(id:string):Observable<Product>{
    return this._http.get<Product>(`${this.RUTA}/producto/id?id=${id}`).pipe()
  }
  public deleteProduct(id?:Number){
   this._http.delete(`${this.RUTA}/delete/${id}`).subscribe(e => {
     console.log(e)
   })
  }
}
