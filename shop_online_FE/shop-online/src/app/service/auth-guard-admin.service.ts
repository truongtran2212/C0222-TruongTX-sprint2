import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // role được đặt ở setItem trong authenticationService
    const role = sessionStorage.getItem('role');
    if (role === 'ADMIN') {
      return true;
    }
    if (role === 'CUSTOMER') {
      this.router.navigateByUrl('/401');
    }else {
      this.router.navigateByUrl('/403');
    }
  }
}
