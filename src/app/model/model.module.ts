import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './rest.service';
import {ProductRepository} from './product.repository';
import {CategoryRepository} from './category.repository';
import {Cart} from './cart.model';
import {Order} from './order.model';
import {OrderReposityory} from './order.reposityory';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    RestService,
    ProductRepository,
    CategoryRepository,
    OrderReposityory,
    Cart,
    Order,
    AuthService
  ]
})

export class ModelModule {

}
