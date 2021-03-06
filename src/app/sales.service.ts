import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommissionRules } from './commission-rules';
import { SalesPerson } from './sales-person';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  setToken( token:string,role:string,salesPersonId: string): void {
    localStorage.setItem('token', token );
    localStorage.setItem('role', role );
    localStorage.setItem('salesPersonId', salesPersonId );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getRole(): string | null {
    return localStorage.getItem('role');
  }
  getSpecificUsers(salesPersonId: string) : Observable<any>{
    const headers: HttpHeaders = new HttpHeaders({
        "content-type" : "application/json"
    });
    let params = new HttpParams();
        params = params.set('salesPersonId', salesPersonId);
        const options = {
          headers: headers,
          params: params
        };
    return this. http.get<SalesPerson>(`http://localhost:8080/sales/specificusers`, options);
  }

  getSalesPersonId(): string | null {
    return localStorage.getItem('salesPersonId');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  loginUrl : string = '';
  baseURL:string="http://localhost:8080/salesPerson/deleteSalesPerson";

  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/sales/login";

  }

  login(sp : SalesPerson) : Observable<any> {
    return this.http.post<any>(this.loginUrl,sp);
  }
  getUserList(): Observable<SalesPerson[]>{
    return this.http.get<SalesPerson[]>("http://localhost:8080/salesPerson/users");
  }

  createUser(user: SalesPerson): Observable<Object>{
    return this.http.post<any>("http://localhost:8080/salesPerson/addSalesPerson",user)
  }

  deleteUser(id: string): Observable<Object>{
    return this.http.delete<any>(`${this.baseURL}/${id}`);
  }
  getRulesList(): Observable<CommissionRules[]>{
    return this.http.get<CommissionRules[]>("http://localhost:8080/admin/rules");
  }

}
