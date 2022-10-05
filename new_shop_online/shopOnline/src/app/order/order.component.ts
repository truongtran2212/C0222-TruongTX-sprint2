import { Component, OnInit } from '@angular/core';
import {OrderService} from "./service/order.service";
import {Order} from "./model/Order";
import {CustomerService} from "../customer/service/customer.service";
import {Customer} from "../customer/model/customer";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList: Order[] = []
  userName: string;
  customer: Customer;
  constructor(private orderService: OrderService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllOrder();
    this.getCustomer();
  }

  getAllOrder() {
    this.orderService.getOrder().subscribe(value => {
      this.orderList = value;
      console.log(value)
    })
  }

  getCustomer() {
    this.userName = sessionStorage.getItem('username')
    this.customerService.getCustomer(this.userName).subscribe(value => {
      this.customer = value;
    })
  }
}
