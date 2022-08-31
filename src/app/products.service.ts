import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './shared/product.model';
@Injectable(
)
export class ProductsService {
  productSelected=new EventEmitter<Product>()
 private products:Product[]=[new Product('https://m.media-amazon.com/images/I/61VIt2hm6hL._AC_UL480_FMwebp_QL65_.jpg'
  ,'CeraVe Moisturizing Cream  ','Health & Personal Care',18,0),new Product('https://m.media-amazon.com/images/I/61y7y+a-7lL._AC_UL480_FMwebp_QL65_.jpg'
  ,'Color Graphing Calculator','Back to school',140,0),new Product('https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_QL65_.jpg'
  ,'Wireless Earbuds ','Electronics',600,0),new Product('https://m.media-amazon.com/images/I/61VIt2hm6hL._AC_UL480_FMwebp_QL65_.jpg'
  ,'CeraVe Moisturizing Cream  ','Health & Personal Care',18,0),new Product('https://m.media-amazon.com/images/I/61y7y+a-7lL._AC_UL480_FMwebp_QL65_.jpg'
  ,'Color Graphing Calculator','Back to school',140,0),new Product('https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_QL65_.jpg'
  ,'Wireless Earbuds ','Electronics',600,0),new Product('https://m.media-amazon.com/images/I/61VIt2hm6hL._AC_UL480_FMwebp_QL65_.jpg'
  ,'CeraVe Moisturizing Cream  ','Health & Personal Care',18,0),new Product('https://m.media-amazon.com/images/I/61y7y+a-7lL._AC_UL480_FMwebp_QL65_.jpg'
  ,'Color Graphing Calculator','Back to school',140,0),new Product('https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL480_QL65_.jpg'
  ,'Wireless Earbuds ','Electronics',600,0)]

  getProducts(){
    return this.products.slice()
  }
  getproduct(index:number){
return this.products[index]
  }
  // constructor() { }
  
}
