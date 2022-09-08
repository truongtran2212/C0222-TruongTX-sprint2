import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BasicAuthHttpInterceptorModule implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('userName') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }

    return next.handle(req);

  }
}
