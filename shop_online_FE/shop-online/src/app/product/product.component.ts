import { Component, OnInit } from '@angular/core';
import {ProductService} from "./service/product.service";
import {Product} from "./model/Product";
import {Category} from "./model/Category";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.productService.getAllProduct(this.name).subscribe((value): any => {
      this.productList = value;
      console.log(value);
    })
  }

  getAllSmartphone() {
    this.productService.getAllSmartPhone(this.name).subscribe(value => {
      this.productList = value;
      console.log(value);
    })
  }

  getAllSmartWatch() {
    this.productService.getAllSmartWatch(this.name).subscribe(value => {
      this.productList = value;
      console.log(value);
    })
  }

  search() {
    this.productService.getAllProduct(this.name).subscribe((value): any => {
      this.productList = value;
      console.log(value);
    })
  }
}
