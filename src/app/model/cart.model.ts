import {Product} from './product.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Cart {
  public items: CartItem[] = [];
  public itemCount: number = 0;
  public itemTotal: number = 0;


  addItem(product: Product, quantity: number = 1) {
    let item = this.items.find(i => i.product.id == product.id);
    if (item != undefined) {
      item.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
    this.calculate();
  }

  calculate() {
    this.itemCount = 0;
    this.itemTotal = 0;

    this.items.forEach(item => {
      this.itemCount += item.quantity;
      // @ts-ignore
      this.itemTotal += (item.quantity * item.product.price);
    });

  }

  removeItem(id: number) {
    let index = this.items.findIndex(i => i.product.id);
    this.items.splice(index, 1);
    this.calculate();
  }

  clear() {

    this.items = [];
    this.itemCount = 0;
    this.itemTotal = 0;
  }

  //inputtan değer arttırma
  updateQuantity(product: Product, quantity: number) {
    let item = this.items.find(i => i.product.id == product.id);
    if (item != undefined) {
      item.quantity = quantity;
    }
    this.calculate();
  }

  //butonlar ile arttırma
  updateToIncrease(product: Product) {
    let item = this.items.find(i => i.product.id == product.id);
    if (item != undefined) {
      item.quantity++;
    }
    this.calculate();
  }

  updateToReduce(product: Product) {
    let item = this.items.find(i => i.product.id == product.id);
    if (item != undefined) {
      item.quantity--;
    }
    this.calculate();
  }


}

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number) {

  }
}
