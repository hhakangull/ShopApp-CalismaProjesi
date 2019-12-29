import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.model';
import {Cart} from '../../model/cart.model';
import {Router} from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  selectedProduct: Product = null;

  constructor(private cart: Cart, private router: Router) {
  }

  addProductToCart(p: Product) {
    this.cart.addItem(p);
    this.router.navigateByUrl('/cart');
  }


  displayDetails(p: Product) {
    this.selectedProduct = p;
  }

  hideDetails() {
    this.selectedProduct = null;
  }
}
