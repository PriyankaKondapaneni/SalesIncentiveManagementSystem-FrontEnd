import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesLine } from './sales-line';

@Injectable({
  providedIn: 'root'
})
export class SalesLineService {
  baseURL:string="http://localhost:8080/sales/getMonthlySalesPerPerson";
  baseURL1:string="http://localhost:8080/sales/getMonthlySales";

  constructor(private http : HttpClient) { }
  getSalesList(month:string,salesPersonId:string): Observable<SalesLine[]>{
    return this.http.get<SalesLine[]>(`${this.baseURL}/${month}/${salesPersonId}`);
  }
  getSales(month:string): Observable<SalesLine[]>{
    return this.http.get<SalesLine[]>(`${this.baseURL1}/${month}`);
  }
}
