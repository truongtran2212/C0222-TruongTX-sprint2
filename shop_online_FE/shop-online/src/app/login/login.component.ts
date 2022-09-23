import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {AuthService} from "../service/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: any;
  loginForm: FormGroup;
  rememberMeBox = false;
  btnLoginStatus = true;

  constructor(private loginService: LoginService,
              private toastr: ToastrService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitLogin() {
    this.btnLoginStatus = false;
    this.account = this.loginForm.value;
    console.log(this.account)
    if (this.loginForm.valid) {
      this.loginService.goLogin(this.account).subscribe(value => {
        this.authService.isLogin(value);
        console.log("value " + value)
          this.router.navigateByUrl('').then(() => {
            window.location.reload();
            // this.toastr.success('Đăng nhập thành công');
            this.toastr.success("Đăng nhập thành công")
            this.btnLoginStatus = true;
          });


      }, () => {
        // this.toastr.error('Tên đăng nhập hoặc mật khẩu không đúng');
        this.toastr.error("Tên đăng nhập hoặc mật khẩu không đúng")
        this.btnLoginStatus = true;
      })
    }
  }

  rememberMe() {
    this.rememberMeBox = !this.rememberMeBox;
    if (this.rememberMeBox) {
      this.account = this.loginForm.value;
      sessionStorage.setItem('usernameLogin', this.loginForm.value.username.toLowerCase());
      sessionStorage.setItem('passwordLogin', this.loginForm.value.password);
      // this.toastr.success('Đã nhớ mật khẩu');
    } else {
      sessionStorage.removeItem('usernameLogin');
      sessionStorage.removeItem('passwordLogin');
      // this.toastr.success('Hủy nhớ mật khẩu');
    }
  }
}
