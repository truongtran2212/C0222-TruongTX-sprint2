import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {Product} from "./model/Product";
import {Category} from "./model/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ShareDataService} from "../service/share-data.service";
import {Subscription} from "rxjs";
import {ReloadService} from "../service/reload.service";
import {TransactionService} from "../transaction/service/transaction.service";
import {FormControl, FormGroup} from "@angular/forms";

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
  private subscription: Subscription;
  private messageReceived: any;


  product: Product;
  addProduct = new Map<any, any>()

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastrService,
              private router: Router,
              private shareDataService: ShareDataService,
              private reload: ReloadService,
              private transactionService: TransactionService) {
    this.subscription = this.reload.getUpdate().subscribe(message => {
      this.messageReceived = message;
    });
  }

  ngOnInit(): void {
    this.getAll();
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
    })
  }

  getAllSmartWatch() {
    this.idCategory = "2";
    this.productService.getAllProduct(this.name, this.idCategory).subscribe(value => {
      this.productList = value;
    })
  }

  search() {
    this.productService.getAllProduct(this.name, this.idCategory).subscribe((value): any => {
      this.productList = value;
    })
  }

  getAllLaptop() {
    this.idCategory = "3";
    this.productService.getAllProduct(this.name, this.idCategory).subscribe(value => {
      this.productList = value;
    })
  }

  addToCart(product: Product) {
    const temp = window.localStorage.getItem('cart')

    this.productService.getProductById(product.id).subscribe(value => {
      this.product = value;
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
      this.toast.success("Thêm sản phẩm vào giỏ hàng thành công")
      this.shareDataService.sendClickEvent();
    })
  }
}

