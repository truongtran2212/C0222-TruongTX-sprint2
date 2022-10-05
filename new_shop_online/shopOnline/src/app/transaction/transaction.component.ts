import {Component, OnInit} from '@angular/core';
import {Transaction} from './model/transaction';
import {TransactionService} from './service/transaction.service';
import {Customer} from '../customer/model/customer';
import {CustomerService} from '../customer/service/customer.service';
import {OrderService} from '../order/service/order.service';
import {Order} from '../order/model/Order';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionList: Transaction[];
  customer: Customer;
  userName: string;
  orderList: Order[];
  total = 0;

  orderListTransaction: Order[];
  page = 0;
  totalElements: number;

  constructor(private transactionService: TransactionService,
              private customerService: CustomerService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAllTransaction();
    this.getCustomer();
    this.getOrder();

  }

  getAllTransaction() {
    this.transactionService.getAll(this.page).subscribe((value: any) => {
      this.transactionList = value.content;
      this.totalElements = value.totalElements;
    });
  }

  getCustomer() {
    this.userName = sessionStorage.getItem('username');
    this.customerService.getCustomer(this.userName).subscribe(value => {
      this.customer = value;
    });
  }

  getOrder() {
    this.orderService.getOrder().subscribe(value => {
      this.orderList = value;
    });
  }

  showDetail(id: number, payment: number) {
    this.orderService.getOrderById(id).subscribe(value => {
      this.orderListTransaction = value;
      document.getElementById('modal').click();
      this.total = payment;
    });
  }

  getPage(event: number) {
    this.page = event - 1;
    this.getAllTransaction();
  }
}
