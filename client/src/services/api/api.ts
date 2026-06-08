import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { backendUrl } from '../../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = `${backendUrl}/api`;

  constructor(private http: HttpClient) { }

  getHome() {
    return this.http.get(`${this.apiUrl}/home`);
  }

  getContact(){
    return this.http.get(`${this.apiUrl}/contact`);
  }
}
