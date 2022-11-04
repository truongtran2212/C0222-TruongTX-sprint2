import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {AuthService} from '../service/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {ShareDataService} from '../service/share-data.service';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {UserService} from '../user/service/user.service';
import {User} from '../user/model/user';
import {CustomerService} from '../customer/service/customer.service';
import {Customer} from '../customer/model/customer';

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
  socialUser: SocialUser;
  loggedIn: boolean;
  userList: User[] = [];
  temp: any;

  constructor(private loginService: LoginService,
              private toastr: ToastrService,
              private authService: AuthService,
              private router: Router,
              private shareData: ShareDataService,
              private socialAuthService: SocialAuthService,
              private userWeb: UserService,
              private customerService: CustomerService
  ) {

  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.loggedIn = (user != null);
    });
    if (localStorage.getItem('usernameLogin') != null) {
      this.loginForm = new FormGroup({
        username: new FormControl(localStorage.getItem('usernameLogin')),
        password: new FormControl(localStorage.getItem('passwordLogin'))
      });
      // phải gọi lại phương thức này để đổi giá trị của rememberBox
      this.rememberMe();
    } else {
      this.createLoginForm();
    }
    this.getAllUser();
  }

  getAllUser() {
    this.userWeb.getAllUser().subscribe(value => {
      this.userList = value;
    });
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
    if (this.loginForm.valid) {
      this.loginService.goLogin(this.account).subscribe(value => {
        this.authService.isLogin(value);
        history.back();
        this.shareData.sendClickEvent();
        this.toastr.success('Đăng nhập thành công');
        this.btnLoginStatus = true;
        console.log(this.loginForm.value);

        // Để khi nhập 1 tài khoản khác thì sẽ thay đổi giá trị ở localStorage
        if (localStorage.getItem('usernameLogin') != null) {
          localStorage.setItem('usernameLogin', this.loginForm.value.username);
          localStorage.setItem('passwordLogin', this.loginForm.value.password);
        }
      }, () => {
        this.toastr.error('Tên đăng nhập hoặc mật khẩu không đúng');
        this.btnLoginStatus = true;
      });
    }
  }

  rememberMe() {
    this.rememberMeBox = !this.rememberMeBox;
    if (this.rememberMeBox) {
      localStorage.setItem('usernameLogin', this.loginForm.value.username);
      localStorage.setItem('passwordLogin', this.loginForm.value.password);

      sessionStorage.setItem('usernameLogin', this.loginForm.value.username);
      sessionStorage.setItem('passwordLogin', this.loginForm.value.password);
      console.log('Đã vào phương thức này');
      console.log(this.account);
      this.toastr.success('Đã nhớ mật khẩu');
    } else {
      localStorage.removeItem('usernameLogin');
      localStorage.removeItem('passwordLogin');
      this.toastr.success('Hủy nhớ mật khẩu');
    }
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe(value => {
      this.socialUser = value;
      console.log(value);
      const user: User = {
        userName: this.socialUser.email,
        password: this.socialUser.id,
        isDeleted: 0
      };
      if (this.userList != null) {
        this.userWeb.addNewUser(user).subscribe(value1 => {
          this.loginForm = new FormGroup({
            username: new FormControl(user.userName),
            password: new FormControl(user.password)
          });
          this.submitLogin();
        });
        const customer: Customer = {
          isDelete: 0,
          name: this.socialUser.name,
          phoneNumber: null,
          address: 'Đà Nẵng',
          gender: 1,
          status: 0,
          email: this.socialUser.email,
          appUser: user,
        };
        console.log(customer);
        this.customerService.addNewCustomer(customer).subscribe(value2 => {
          this.socialAuthService.authState.subscribe(value3 => {
          });
        });
      }
    }, error => {
      console.log('error');
    });
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
