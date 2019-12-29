import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AuthComponent} from './auth/auth.component';
import {AdminComponent} from './admin.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';


@NgModule({
  declarations: [AuthComponent,
    AdminComponent,
    ProductListComponent,
    ProductFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    OrderListComponent,
    CategoryListComponent,
    CategoryFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers:[AuthGuard]
})
export class AdminModule {
}
