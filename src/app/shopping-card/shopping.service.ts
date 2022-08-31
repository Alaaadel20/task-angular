import { Injectable,EventEmitter } from '@angular/core';
import { Product } from '../shared/product.model';
import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingService {
  cartItemSelected=new EventEmitter<Product>()
items:Product[]=[]
total:number=5;
addToCart(product: Product) {
  this.items.push(product);
}

getItems() {
  return this.items;
}
getItem(index:number){
  return this.items[index]
    }

clearCart() {
  this.items = [];
  return this.items;
}

removeItem(product){
 this.items.map((a:any,index:any)=>{
  if(product.name===a.name){
    this.items.splice(index,1)

  }
  
 }
 )
 console.log(this.total)

}
totalAmount(){
  for (const item of this.items) {
this.total+=item.amount
  }
  return this.total
 }
  // constructor(  ) { }
}
