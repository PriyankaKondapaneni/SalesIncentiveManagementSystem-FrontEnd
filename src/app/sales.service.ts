import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesPerson } from './sales-person';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  loginUrl : string = '';

  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/sales/login";

  }

  login(sp : SalesPerson) : Observable<any> {
    return this.http.post<any>(this.loginUrl,sp);
  }

}
