import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:5268';

  constructor(private http: HttpClient) { }

  getHome() {
    return this.http.get(`${this.apiUrl}/api/home`);
  }
}
