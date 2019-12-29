import {Component, OnInit} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {Product} from '../model/product.model';
import {Category} from '../model/category.model';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public selectedCategory: Category = null;
  public productsPerPage = 3;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];

  constructor(
    private productRepository: ProductRepository,
  ) {
  }
  get pageNumbers(): number[] {
    return Array(
      Math.ceil(this.productRepository
        .getProducts(this.selectedCategory)
        .length / this.productsPerPage)).fill(0)
      .map((a, i) => i + 1);
  }
  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    this.selectedProducts = this.productRepository.getProducts(this.selectedCategory);
    return this.selectedProducts
      .slice(index, index + this.productsPerPage);
  }
  changePage(no: number) {
    this.selectedPage = no;
  }
  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }
  getCategory(category: Category) {
    this.selectedCategory = category;
  }
}
