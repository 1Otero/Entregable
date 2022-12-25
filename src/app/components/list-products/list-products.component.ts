import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductServiceService} from '../../services/product-service.service'
import {Product} from '../../modelo/product'


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input("products") products!:Product[];
  
  constructor(private _product:ProductServiceService) {
    
  }

  ngOnInit(): void {
    this.getAll()
  }
  
   public getAll(){
      this._product.getProducts().subscribe(e => {
        this.products= e
      })
  }
  public delete(id?:Number){
    this._product.deleteProduct(id)
  }
}
