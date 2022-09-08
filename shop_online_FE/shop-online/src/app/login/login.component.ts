import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  invalidLogin = false;
  grantList: any;
  constructor(private loginService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  checkLogin() {
    (this.loginService.authenticate(this.userName, this.password).subscribe(
        data => {
          this.router.navigate(['']);
          this.invalidLogin = false;
          console.log("False " + this.userName)
          console.log("False " + this.password)
          console.log(this.grantList);
        },
        error => {
          this.invalidLogin = true;
          console.log("True " + this.userName)
          console.log("True " + this.password)
          console.log("True")
        }
      )
    );
  }
}
