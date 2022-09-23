import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product/service/product.service";
import {Product} from "../product/model/Product";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;
  carts = [];
  total: number = 0;
  totalProductOneProduct: number = 0;
  checkPaypal = false;
  quantityProduct = 1;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private toast: ToastrService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
      console.log(id + " id")
      console.log(value + " value")
    })
  }

  plusProduct() {
    this.quantityProduct +=1;
  }

  removeProduct() {
    this.quantityProduct -= 1;
  }

  addToCart (product: Product) {
    const temp = window.localStorage.getItem('cart')
    const id = this.activatedRoute.snapshot.params.id
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
      console.log(this.product);
      if (temp) {
        this.carts = JSON.parse(temp);
      }

      const item =  this.carts.find(c => c.product.id == this.product.id)

      console.log(item)
      if (item) {
        item.quantityOrder =  this.quantityProduct + item.quantityOrder;
      }
      if(!item){
        this.carts.push({product, quantityOrder: this.quantityProduct})
        console.log(item)
      }
      window.localStorage.setItem('cart', JSON.stringify(this.carts));
      this.toast.success("Thêm sản phẩm vào giỏ hàng thành công")
    })
  }
}
