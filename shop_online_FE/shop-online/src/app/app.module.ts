import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { Error403Component } from './error403/error403.component';
import { Error401Component } from './error401/error401.component';
import { ProductOrderComponent } from './product-order/product-order/product-order.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    HomePageComponent,
    DetailComponent,
    LoginComponent,
    ProductComponent,
    UserComponent,
    Error403Component,
    Error401Component,
    ProductOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
