import { Component, OnInit ,Input,ViewChild,ElementRef} from '@angular/core';
import { Product } from '../shared/product.model';
import { ShoppingService } from '../shopping-card/shopping.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() product:Product
  @ViewChild ('amount',{static:false})amountRef:ElementRef
  constructor(private shoppingService:ShoppingService) { 

  }

  ngOnInit(): void {
  }

  onAdd(){
    const amount =this.amountRef.nativeElement.value
  console.log(amount)
  }
  onRemove(){
    const amount =this.amountRef.nativeElement.value
    console.log(amount)
  }
  addToCart(product: Product) {
    this.shoppingService.addToCart(product);
    product.amount++
   
  }
}
