import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../service/authentication.service";
import {ProductService} from "../product/service/product.service";
import {Category} from "../product/model/Category";
import {Product} from "../product/model/Product";

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
  private subscriptionName: Subscription;

  constructor(
    // private logout: LogoutService,
    // private toastr: ToastrService,
    private productService: ProductService,
    private router: Router,
    private auth: AuthService) {
    this.auth.checkLogin().subscribe(value => {
      this.loginStatus = value;
      this.role = this.readSessionStorage('role');
      console.log(this.role + ' role')
      this.username = this.readSessionStorage('username');
    }, error => {
      sessionStorage.clear();
    });
  }

  ngOnInit(): void {

  }

  readSessionStorage(key: string): string {
    return sessionStorage.getItem(key);
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
  //       localStorage.clear();
  //     },2000)
  //   })
  // }
}
