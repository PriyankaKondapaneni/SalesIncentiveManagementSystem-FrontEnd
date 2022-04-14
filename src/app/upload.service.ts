import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private server = 'http://localhost:8080/sales/upload';

  constructor(private http: HttpClient) { }
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
