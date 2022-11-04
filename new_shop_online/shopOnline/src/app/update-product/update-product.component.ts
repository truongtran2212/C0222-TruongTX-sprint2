import {Component, OnInit} from '@angular/core';
import {Product} from '../product/model/Product';
import {ProductService} from '../product/service/product.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../product/model/Category';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  categoryList: Category[];
  product: Product;

  constructor(private productService: ProductService,
              private toast: ToastrService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  formProduct = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    origin: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.min(1), Validators.required]),
    quantity: new FormControl('', [Validators.min(1), Validators.required]),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.getProductById(id).subscribe(value => {
      this.formProduct.patchValue(value);
      console.log(this.formProduct.patchValue(value));
    });
    this.getAllCategory();
  }

  onSubmit() {
    this.product = this.formProduct.value;
    this.productService.updateProduct(this.product).subscribe(value => {
      this.toast.success('Update successful');
      this.route.navigateByUrl('/product');
    }, error => {
      this.toast.error('update fail');
    });
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    });
  }


  compareObjects(o1: any, o2: any) {
    if (o1.name === o2.name && o1.id === o2.id) {
      return true;
    } else {
      return false;
    }
  }
}
