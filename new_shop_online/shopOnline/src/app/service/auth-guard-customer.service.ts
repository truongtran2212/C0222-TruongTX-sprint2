  import { Injectable } from '@angular/core';
  import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardCustomerService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = sessionStorage.getItem('role');
    if (role === 'CUSTOMER') {
      return true;
    }if (role === 'ADMIN') {
      this.router.navigateByUrl('/401');
    }
    else  {
      this.router.navigateByUrl('/403');
    }
  }
}
