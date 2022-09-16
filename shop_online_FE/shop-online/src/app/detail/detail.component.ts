import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product/service/product.service";
import {Product} from "../product/model/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
      console.log(id + " id")
      console.log(value + " value")
    })
  }
}
