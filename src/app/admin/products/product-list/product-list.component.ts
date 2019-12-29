import {Component, OnInit} from '@angular/core';
import {ProductRepository} from '../../../model/product.repository';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productRepostory: ProductRepository
  ) {
  }

  getProducts(): Product[] {
    return this.productRepostory.getProducts();
  }

  ngOnInit() {
  }

  deleteProduct(item: Product) {

  }
}
