import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderReposityory} from '../../model/order.reposityory';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public order: Order,
              private orderRepository: OrderReposityory) {
  }

  ngOnInit() {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepository.saveOrder(this.order)
        .subscribe(order => {
          this.order.clearOrder();
          this.orderSent = true;
          this.submitted = false;
        });
    }
  }
}
