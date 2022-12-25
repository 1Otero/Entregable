import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductsComponent} from './components/list-products/list-products.component'
import {FormProductComponent} from './components/form-product/form-product.component'

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'product/all'
},{
 path: 'product/all',
 component: ListProductsComponent
},{
  path: 'product/add',
  component: FormProductComponent
},{
  path: 'product/update/:id',
  component: FormProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
