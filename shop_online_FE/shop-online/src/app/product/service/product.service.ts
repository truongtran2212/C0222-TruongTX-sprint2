import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {Category} from "../model/Category";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) {}

  getAllProduct(name: string, idCategory: string): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + "/product" + `/list?name=${name}&idCategory=${idCategory}`)
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + "/category/list");
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + "/product/" + id)
  }
}
