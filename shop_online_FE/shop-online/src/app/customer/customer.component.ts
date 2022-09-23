import { Component, OnInit } from '@angular/core';
import {CustomerService} from "./service/customer.service";
import {Customer} from "./model/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  userName: string;
  customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.userName = sessionStorage.getItem('username')
    this.customerService.getCustomer(this.userName).subscribe(value => {
      this.customer = value;
    })
  }

}
