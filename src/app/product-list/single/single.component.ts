import { Component, OnInit,ViewChild,ElementRef,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { ShoppingService } from 'src/app/shopping-card/shopping.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
   product:Product
 @Input()id:number
 item:Product
//  @Output() redirect:EventEmitter<any> =new EventEmitter();
@ViewChild ('amount',{static:false})amountRef:ElementRef
  constructor(private route:ActivatedRoute,
    private productservice:ProductsService,
    private shoppingService:ShoppingService) { 

  }

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=> {
      this.id= +params['id']
      this.product=this.productservice.getproduct(this.id)
      }
    )

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
  // sendData(){
  //   this.redirect.emit(this.id)
  // }

}






