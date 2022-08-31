import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input,Output,ElementRef,ViewChild} from '@angular/core';
import { Product } from '../shared/product.model';
import { ShoppingService } from './shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})

export class ShoppingCardComponent implements OnInit {
  product:Product
  selectedItem:Product
  id:number
  item:Product
  idIem:number
  
    @ViewChild ('amount',{static:false})amountRef:ElementRef
  items = this.shoppingService.getItems();
  total=this.shoppingService.totalAmount()
  constructor(private route:ActivatedRoute,private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=> {
      this.id= +params['id']
      this.item=this.shoppingService.getItem(this.id)
      }
    )
  }
  removeItem(product:Product){
    this.shoppingService.removeItem(product);
 
   
  }
  onAmountchange(item:Product){
    const amount =Number(this.amountRef.nativeElement.value)

 item.amount+=amount
  }
//   onSelected(){
//     this.shoppingService.cartItemSelected.emit(this.product)
// console.log(this.product.name)
//   }
}
