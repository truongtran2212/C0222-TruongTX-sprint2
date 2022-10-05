import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from "./product/product.component";
import {Error403Component} from "./error403/error403.component";
import {Error401Component} from "./error401/error401.component";
import {HeaderComponent} from "./header/header.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {AuthGuardAdminAndCustomerService} from "./service/auth-guard-adminAndCustomer.service";
import {CustomerComponent} from "./customer/customer.component";
import {AuthGuardCustomerService} from "./service/auth-guard-customer.service";
import {UpdateProductComponent} from "./update-product/update-product.component";


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
    path: 'cart', component: CartComponent,
    canActivate: [AuthGuardAdminAndCustomerService]
  },
  {
    path: 'product', component: ProductComponent,
    // canActivate: [AuthGuardAdminAndCustomerService]
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
    path: 'product/update/:id', component: UpdateProductComponent
  },

  {
    path: 'header', component: HeaderComponent
  },

  {
    path: 'transaction', component: TransactionComponent,
    canActivate: [AuthGuardCustomerService]
  },

  {
    path: 'customer', component: CustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
