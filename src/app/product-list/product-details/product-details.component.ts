import { Component, OnInit ,Input} from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/shared/product.model';
import { ShoppingService } from 'src/app/shopping-card/shopping.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product:Product

 @Input() index:number;
  constructor(private productService:ProductsService,private shoppingService:ShoppingService) { 

  }

  ngOnInit(): void {
  
  }
  onSelected(){
this.productService.productSelected.emit(this.product)
console.log(this.product.name)

  }
  addToCart(product: Product) {
    this.shoppingService.addToCart(product);
    // product.amount++
   
  }

}
