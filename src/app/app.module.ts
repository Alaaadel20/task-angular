import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { CheckoutComponent } from './shopping-card/checkout/checkout.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ShoppingService } from './shopping-card/shopping.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SingleCardComponent } from './shopping-card/single-card/single-card.component';
import { ViewDetailComponent } from './product-list/view-detail/view-detail.component';
import { SingleComponent } from './product-list/single/single.component';
import { ShopStartComponent } from './shopping-card/shop-start/shop-start.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ShoppingCardComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    SingleProductComponent,
    FilterPipe,
    SingleCardComponent,
    ViewDetailComponent,
    SingleComponent,
    ShopStartComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 HttpClientModule,
 MatSliderModule,
 MatIconModule,
 FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
