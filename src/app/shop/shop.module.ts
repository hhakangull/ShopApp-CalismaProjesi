import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ShopComponent} from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

//localhost:4200/shop
//localhost:4200/cart
//localhost:4200/order




@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations:[ShopComponent, NavbarComponent, CategoryComponent, ProductComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],
  exports: [ShopComponent,CartDetailComponent,CheckoutComponent]
})
export class ShopModule {

}
