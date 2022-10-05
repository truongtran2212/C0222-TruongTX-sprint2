import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminAndCustomerService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // role được đặt ở setItem trong authenticationService
    const role = sessionStorage.getItem('role');
    if (role === 'ADMIN' || role === 'CUSTOMER') {
      return true;
    } else {
      this.router.navigateByUrl('/403');
    }
  }
}
