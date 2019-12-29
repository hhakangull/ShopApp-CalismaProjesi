import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShopComponent} from './shop/shop.component';
import {ShopModule} from './shop/shop.module';
import {RouterModule} from '@angular/router';
import {CartDetailComponent} from './shop/cart-detail/cart-detail.component';
import {CheckoutComponent} from './shop/checkout/checkout.component';
import {ProductComponent} from './shop/product/product.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      {path: 'shop', component: ShopComponent},
      {path: 'cart', component: CartDetailComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'product', component: ProductComponent},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
      {path: '**', redirectTo: '/shop'}, ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
