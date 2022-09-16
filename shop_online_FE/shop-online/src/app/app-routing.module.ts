import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from "./product/product.component";
import {AuthGuardAdminService} from "./service/auth-guard-admin.service";
import {Error403Component} from "./error403/error403.component";
import {Error401Component} from "./error401/error401.component";
import {ProductOrderComponent} from "./product-order/product-order/product-order.component";


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'product/:id', component: DetailComponent
  },

  {
    path: '', component: HomePageComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'product', component: ProductComponent,
    canActivate: [AuthGuardAdminService]
  },

  {
    path: '401', component: Error401Component
  },

  {
    path: '403', component: Error403Component
  },

  {
    path: 'productOrder/:id', component: CartComponent
  },

  {
    path: 'productOrder', component: ProductOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
