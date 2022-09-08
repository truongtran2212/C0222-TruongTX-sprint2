import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../service/authentication.service";

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
  private subscriptionName: Subscription;

  constructor(
    // private logout: LogoutService,
              // private toastr: ToastrService,
              private router: Router,
              private auth: AuthService) {
    this.auth.checkLogin().subscribe(value => {
      this.loginStatus = value;
      this.role = this.readLocalStorage('role');
      console.log(this.role + ' role')
      this.username = this.readLocalStorage('username');
    }, error => {
      localStorage.clear();
    });
  }

  ngOnInit(): void {
  }

  readLocalStorage(key: string): string {
    return localStorage.getItem(key);
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
