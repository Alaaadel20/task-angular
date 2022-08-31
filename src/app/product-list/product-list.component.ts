import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../shared/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 filteredName=''
 public display: number = 1;
 selectedProduct:Product
  products:Product[]
  parentData:any;
  constructor(private productsService:ProductsService) {

   }

  ngOnInit(): void {
    this.products= this.productsService.getProducts()
    this.productsService.productSelected.subscribe(
      (product:Product)=>{
        this.selectedProduct=product
      }
    )
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }
 
}
