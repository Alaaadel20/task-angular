import { Component,Output } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './shared/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ProductsService]
})

export class AppComponent {
  @Output() product:Product
 

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
   
  }
 
}
