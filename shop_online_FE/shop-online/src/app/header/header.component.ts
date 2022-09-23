import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../service/authentication.service";
import {ProductService} from "../product/service/product.service";
import {Category} from "../product/model/Category";
import {Product} from "../product/model/Product";
import {ReloadService} from "../service/reload.service";
import {CustomerService} from "../customer/service/customer.service";
import {Customer} from "../customer/model/customer";
import {LogoutService} from "../service/logout.service";
import {ToastrService} from "ngx-toastr";
import {ShareDataService} from "../service/share-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: string;
  btnLoginStatus = true;
  loginStatus: any;
  username: string;
  categoryList: Category[] = []
  productList: Product[] = []
  name = '';
  idCategory = '';
  carts = [];
  totalQuantityOrder: number = 0;
  userName: string;
  customer: Customer;

  private subscriptionName: Subscription;
  private messageReceived: any;

  constructor(private reload: ReloadService,
    private logout: LogoutService,
    private toastr: ToastrService,
    private productService: ProductService,
    private customerService: CustomerService,
    private router: Router,
    private auth: AuthService,
              private shareData: ShareDataService) {
   this.shareData.getClickEvent().subscribe(value => {
     this.totalQuantityOrder = 0;
     this.ngOnInit();
   });
  }

  ngOnInit(): void {
    this.auth.checkLogin().subscribe(value => {
      this.loginStatus = value;
      this.role = this.readSessionStorage('role');
      console.log(this.role + ' role')
      this.username = this.readSessionStorage('username');
    }, error => {
      sessionStorage.clear();
    });
    this.subscriptionName = this.reload.getUpdate().subscribe(message => {
      this.messageReceived = message;
    });
    this.getCustomer();
    this.carts = JSON.parse(localStorage.getItem('cart'))
    for (let cart of this.carts) {
      this.totalQuantityOrder += cart.quantityOrder;
    }
  }

  readSessionStorage(key: string): string {
    return sessionStorage.getItem(key);
  }

  getCustomer() {
    this.userName = sessionStorage.getItem('username')
    this.customerService.getCustomer(this.userName).subscribe(value => {
      this.customer = value;
      console.log(this.customer.name);
    })
  }

  // onLogout(){
  //   this.btnLoginStatus = false;
  //   this.logout.onLogout().subscribe(() => {
  //     setTimeout(() => {
  //       this.router.navigateByUrl('/login').then(() => {
  //         window.location.reload();
  //         this.toastr.success('Đăng xuất thành công');
  //         this.btnLoginStatus = true;
  //       })
  //       sessionStorage.clear();
  //     },2000)
  //     console.log("SUCCESS")
  //   })
  // }

  onLogout() {
    this.btnLoginStatus = false;
    window.location.reload();
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

}
