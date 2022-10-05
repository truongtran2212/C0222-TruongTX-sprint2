import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product/service/product.service";
import {Product} from "../product/model/Product";
import {render} from "creditcardpayments/creditCardPayments";
import {ToastrService} from "ngx-toastr";
import {ShareDataService} from "../service/share-data.service";
import {Transaction} from "../transaction/model/transaction";
import {TransactionService} from "../transaction/service/transaction.service";
import {formatDate} from "@angular/common";
import {CustomerService} from "../customer/service/customer.service";
import {Customer} from "../customer/model/customer";
import {OrderService} from "../order/service/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts = [];
  total: number = 0;
  product: Product;
  userName: string;
  customer: Customer;
  transaction: Transaction;
  page = 0;
  totalElements: number;

  constructor(private productService: ProductService,
              private toast: ToastrService,
              private shareData: ShareDataService,
              private transactionService: TransactionService,
              private customerService: CustomerService,
              private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.carts = JSON.parse(localStorage.getItem('cart'))
    for (const cart of this.carts) {
      this.total += cart.product.price * cart.quantityOrder;
    }
    this.userName = sessionStorage.getItem('username')
    this.customerService.getCustomer(this.userName).subscribe(value => {
      this.customer = value;
      console.log(value);
    })
    this.getAllTransaction();
  }

  addProductToCart(product: Product) {
    const temp = window.localStorage.getItem('cart')

    this.productService.getProductById(product.id).subscribe(value => {
      this.product = value;
      console.log(this.product);
      if (temp) {
        this.carts = JSON.parse(temp);
      }

      const item = this.carts.find(c => c.product.id == this.product.id)

      console.log(item)
      if (item) {
        item.quantityOrder += 1;
        window.localStorage.setItem('cart', JSON.stringify(this.carts));
      }
      this.total = this.total + item.product.price;
    }, error => {
    }, () => {
      this.shareData.sendClickEvent();
    })
  }

  removeProductFromCart(product: Product) {
    const temp = window.localStorage.getItem('cart')
    this.productService.getProductById(product.id).subscribe(value => {
      this.product = value;
      console.log(this.product);
      if (temp) {
        this.carts = JSON.parse(temp);
      }

      const item = this.carts.find(c => c.product.id == this.product.id)

      console.log(item)
      if (item) {
        item.quantityOrder -= 1;
        window.localStorage.setItem('cart', JSON.stringify(this.carts));
      }
      this.total = this.total - item.product.price;

    }, error => {
    }, () => {
      this.shareData.sendClickEvent();
    })
  }

  removeProduct(product: Product) {
    const temp = window.localStorage.getItem('cart')

    this.productService.getProductById(product.id).subscribe(value => {
      this.product = value;
      console.log(this.product);
      if (temp) {
        this.carts = JSON.parse(temp);
      }

      const item = this.carts.find(c => c.product.id == this.product.id)

      console.log(item)
      if (item) {
        this.total = this.total - (item.product.price * item.quantityOrder);
        item.quantityOrder = 0;
        window.localStorage.setItem('cart', JSON.stringify(this.carts));
      }
    }, error => {
    }, () => {
      this.shareData.sendClickEvent();
    })
  }

  pay() {
    document.getElementById("myPaypal").innerHTML = "<div id='showPaypal'></div>"
    render({
      id: '#showPaypal',
      value: ((this.total).toFixed(2)),
      currency: 'USD',
      onApprove: (details) => {
        this.createTransaction();
        this.createOrder();
        this.toast.success('Thanh toán thành công');
        console.log("123123123 pay")
        localStorage.removeItem('cart')
        this.total = 0;
        this.ngOnInit();
      }
    });

  }

  transactionList: Transaction[];
  id: number;

  getAllTransaction() {
    this.transactionService.getAll(2).subscribe((value: any) => {
      this.transactionList = value.content;
      this.totalElements = value.totalElements;
    })
  }

  createTransaction() {
    // for (let i = 0; i < this.transactionList.length; i++) {
    //   this.id = this.transactionList[this.transactionList.length - 1].id;
    // }
    this.id = this.totalElements + 1;
    this.transaction = {
      id: this.id,
      payment: this.total,
      paymentMethod: 'Pay pal',
      startDate: this.getCurrenDay(),
      customer: this.customer,
    }
    this.transactionService.createTransaction(this.transaction).subscribe(value => {

    }, error => {
    }, () => {
    })
  }

  createOrder() {
    for (const cart of this.carts) {
      const order = {
        isDelete: 0,
        quantity: cart.quantityOrder,
        transactionOrder: this.transaction,
        product: cart.product
      }
      this.orderService.createOrder(order).subscribe(value => {
      })
    }
  }

  getCurrenDay(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US')
  }
}
