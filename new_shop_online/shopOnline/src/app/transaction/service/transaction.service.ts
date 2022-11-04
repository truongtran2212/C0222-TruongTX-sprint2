import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from '../model/transaction';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  createTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<any>(API_URL + '/transaction/create', transaction);
  }

  getAllByCustomerName(page: number, customerId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_URL + '/transaction/list?page=' + page + '&customerId=' + customerId);
  }

  getAllTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_URL + '/transaction/listTransaction');
  }
}
