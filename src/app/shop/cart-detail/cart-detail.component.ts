import {Component, OnInit} from '@angular/core';
import {Cart} from '../../model/cart.model';
import {ProductRepository} from '../../model/product.repository';
import {Product} from '../../model/product.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  public itemCount: number;

  constructor(public cart: Cart,
              private productRepository: ProductRepository) {
  }

  ngOnInit() {
  }

  increaseItem(product: Product) {
    this.cart.updateToIncrease(product);
  }

  reduceItem(product: Product) {
    this.cart.updateToReduce(product);
  }

  removeToBasket(product: Product) {
    this.cart.clear();
  }
}

// get product(): number {
//   let index =
//
//   return this.productRepository.getProducts();
// }
