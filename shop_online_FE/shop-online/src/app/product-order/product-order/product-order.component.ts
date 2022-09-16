import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product/service/product.service";
import {ProductOrderService} from "../service/product-order.service";
import {ProductOrder} from "../model/ProductOrder";

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  productOrderList: ProductOrder[] = []

  constructor(private productOrderService: ProductOrderService) { }

  ngOnInit(): void {
    this.getAllProductOrder();
  }

  getAllProductOrder() {
    this.productOrderService.getAllProductOrder().subscribe(value => {
      this.productOrderList = value;
    })
  }
}
