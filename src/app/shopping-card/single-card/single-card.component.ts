import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingService } from '../shopping.service';
import { Product } from 'src/app/shared/product.model';
@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input()id:number
  item:Product
  constructor(private route:ActivatedRoute,
    private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
      (params:Params)=> {
      this.id= +params['id']
      this.item=this.shoppingService.getItem(this.id)
      }
    )
  }

}
