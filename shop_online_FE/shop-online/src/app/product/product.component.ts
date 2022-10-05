import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {Product} from "./model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ShareDataService} from "../service/share-data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "./model/Category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name = '';
  idCategory = '';
  productList: Product[] = []
  id: number;
  carts = [];
  nameDelete = '';
  product: Product;
  categoryList: Category[];
  checkImgSize = false;
  checkImg: boolean;
  regexImg = false;
  selectedFile: File = null;

  formProduct = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    origin: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.min(1), Validators.required]),
    quantity: new FormControl('', [Validators.min(1), Validators.required]),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  })

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastrService,
              private router: Router,
              private shareDataService: ShareDataService) {

  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCategory();

  }

  getAll() {
    this.idCategory = '';
    this.productService.getAllProduct(this.name, this.idCategory).subscribe((value): any => {
      this.productList = value;
    })
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
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
      const item = this.carts.find(c => c.product.id == this.product.id)
      console.log(item)
      if (item) {
        item.quantityOrder += 1;
      }
      if (!item) {
        this.carts.push({product, quantityOrder: 1})
      }
      window.localStorage.setItem('cart', JSON.stringify(this.carts));
      this.toast.success("Add product to cart successful")
      this.shareDataService.sendClickEvent();
    })
  }


  getValue(id: number, name: string) {
    this.id = id;
    this.nameDelete = name;
  }

  delete() {
    this.productService.deleteProduct(this.id).subscribe(value => {
      this.toast.success("Delete successful")
    }, error => {
    }, () => {
      this.ngOnInit();
    })
  }

  onSubmitCreate() {
    const product = this.formProduct.value
    this.productService.createProduct(product).subscribe(value => {
      this.toast.success("Add new product successful")
      this.ngOnInit();
    }, error => {
      this.toast.error("Add new product fail")
    },() => {
      this.formProduct.reset();
    })
  }

  url: any;
  msg = '';


  selectFile() {
    if (!this.selectedFile || this.selectedFile.name === '') {
      return;
    }
    this.checkImgSize = false;
    this.checkImg = false;
    this.regexImg = false;

    const mimeType = this.selectedFile.type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }
}

