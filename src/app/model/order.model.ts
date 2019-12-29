import {Cart} from './cart.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Order {

  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public phone: string;
  public email: string;
  public isSend: boolean = false;

  constructor(
    public cart: Cart,
  ) {

  }

  clearOrder() {
    this.id = null;
    this.name = null;
    this.address = null;
    this.phone = null;
    this.city = null;
    this.email = null;
    this.isSend = false;
    this.cart.clear();
  }

}
