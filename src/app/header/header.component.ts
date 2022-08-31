import { Component, OnInit,Output } from '@angular/core';
import { Product } from '../shared/product.model';
import { ShoppingService } from '../shopping-card/shopping.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items = this.shoppingService.getItems();
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

}
