import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Product} from '../../modelo/product'
import {ProductServiceService} from '../../services/product-service.service'

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  @Input("product") product!:Product
  @Input("edit") edit:Boolean=false
  @Input("error") error!:Boolean
  @Input("mensaje") mensaje!:String

  formProduct:Product={
    Id:0,
    Nombre: "",
    Description: "",
    Precio: 0
  }

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private SProducto: ProductServiceService) { }

  ngOnInit(): void {
    var id= this._activatedRoute.snapshot.params
    if(id['id']){
      var capturaId= id['id']
      this.getProduct(capturaId)
      this.edit=true
    }

  }

  addProduct(){
    this.SProducto.addProduct(this.formProduct)
    this._router.navigate([''])
  }
  updateProduct(){
    this.SProducto.updateProduct(this.formProduct)
    this._router.navigate([''])
  }
  public getProduct(id:string){
    this.SProducto.getProduct(id).subscribe(e => {
      if(e.hasOwnProperty("error")){
        this.error=true
        this.mensaje= "Este producto no fue encontrado"
      }else{
        this.error=false
        this.formProduct=e
      }
    })
  }
}
