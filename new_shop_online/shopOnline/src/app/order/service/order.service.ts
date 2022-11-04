import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/Order';
import {Statistics} from '../model/statistics';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL + '/order/list');
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post<any>(API_URL + '/order/createOrder', order);
  }

  getOrderById(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(API_URL + '/order/' + id);
  }

  getStatisticsWeek(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(API_URL + '/order/statistics/week');
  }

  getStatisticsMonth(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(API_URL + '/order/statistics/month');
  }

  getStatisticsYear(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(API_URL + '/order/statistics/year');
  }
}
