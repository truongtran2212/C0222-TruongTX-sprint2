import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductOrder} from "../model/ProductOrder";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductOrderService {

  constructor(private http: HttpClient) { }

  getAllProductOrder(): Observable<ProductOrder[]> {
    return this.http.get<ProductOrder[]>(API_URL + '/productOrder/list');
  }

  createProductOrder(productOrder: ProductOrder): Observable<any> {
    return this.http.post<any>(API_URL + '/productOrder/create',productOrder)
  }
}
