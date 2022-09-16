import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {Product} from "./model/Product";
import {Category} from "./model/Category";
import {ActivatedRoute} from "@angular/router";
import {ProductOrderService} from "../product-order/service/product-order.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name = '';
  idCategory = '';
  productList: Product[] = []
  categoryList: Category[] = []
  id: string;
  storage: any;
  carts = [];

  product: Product;
  addProduct = new Map<any, any>()

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private productOrderService: ProductOrderService) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.product);
  }

  getAll() {
    this.idCategory = '';
    this.productService.getAllProduct(this.name, this.idCategory).subscribe((value): any => {
      this.productList = value;
    })
  }

  getAllSmartphone() {
    this.idCategory = "1";
    this.productService.getAllProduct(this.name, this.idCategory).subscribe(value => {
      this.productList = value;
      console.log(value);
    })
  }

  getAllSmartWatch() {
    this.idCategory = "2";
    this.productService.getAllProduct(this.name, this.idCategory).subscribe(value => {
      this.productList = value;
      console.log(value);
    })
  }

  search() {
    this.productService.getAllProduct(this.name, this.idCategory).subscribe((value): any => {
      this.productList = value;
      console.log(value);
    })
  }

  getAllLaptop() {
    this.idCategory = "3";
    this.productService.getAllProduct(this.name, this.idCategory).subscribe(value => {
      this.productList = value;
      console.log(value);
    })
  }

  addToCart(product: Product) {
    const temp = window.localStorage.getItem('cart')

    this.productService.getProductById(product.id).subscribe(value => {
      this.product = value;
      console.log(this.product);
      if (temp) {
        this.carts = JSON.parse(temp);
      }

      const item =  this.carts.find(c => c.product.id == this.product.id)

      console.log(item)
      if (item) {
        item.quantityOrder += 1;
      } if (!item) {
        this.carts.push({product, quantityOrder: 1})

      }
      window.localStorage.setItem('cart', JSON.stringify(this.carts));

    })
  }
}

