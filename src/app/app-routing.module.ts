import { NgModule } from '@angular/core';
import { RouterModule, Routes,ParamMap } from '@angular/router';


import { ProductListComponent } from './product-list/product-list.component';
import { SingleComponent } from './product-list/single/single.component';
import { ViewDetailComponent } from './product-list/view-detail/view-detail.component';
import { CheckoutComponent } from './shopping-card/checkout/checkout.component';
import { ShopStartComponent } from './shopping-card/shop-start/shop-start.component';

import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { SingleCardComponent } from './shopping-card/single-card/single-card.component';
import { SingleProductComponent } from './single-product/single-product.component';



const routes: Routes = [
  { path: '', redirectTo:'products',pathMatch:'full'},

  { path: 'products', component: ProductListComponent,children:[
    {path:'',component:ViewDetailComponent},
    {path:':id',component:SingleComponent}
   ]},
  
  { path: 'cart', component: ShoppingCardComponent,children:[
    {path:'',component:ShopStartComponent},
    {path:':id',component:SingleCardComponent}
   ]},
  
  { path: 'checkout', component: CheckoutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
