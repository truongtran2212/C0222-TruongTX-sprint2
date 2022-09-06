import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DetailComponent} from './detail/detail.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {
  path: 'login', component: LoginComponent},
  {
    path: 'detail', component: DetailComponent},
  {
  path: '', component: HomePageComponent
},
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
