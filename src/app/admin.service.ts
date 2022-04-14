import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { SalesPerson } from './sales-person';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loginUrl : string = '';

  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/sales/adminlogin";

  }

  login(sp : Admin) : Observable<any> {
    return this.http.post<any>(this.loginUrl,sp);
  }
}
