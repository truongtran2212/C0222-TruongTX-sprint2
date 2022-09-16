import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product/service/product.service";
import {Product} from "../product/model/Product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts = [];
  total: number = 0;
  totalProductOneProduct: number = 0;
  product: Product;

  constructor(private productService: ProductService) {
    this.carts = JSON.parse(localStorage.getItem('cart'))
    for (const cart of this.carts) {
      this.total += cart.product.price * cart.quantityOrder;
    }
  }

  ngOnInit(): void {

    this.total;
    console.log(this.total);
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
    })
  }
}

