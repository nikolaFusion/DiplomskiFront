import { Observable } from 'rxjs';
import { LoginModel } from './../../models/login-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  baseUrl = 'https://localhost:7116';
  constructor(private http: HttpClient) {}

  public Login(): Observable<string> {
    let user = new LoginModel('nikola', 'nikola');
    return this.http.post<string>(`${this.baseUrl}/user/login`, user);
  }

  public GetAll() {
    return this.http.get<string>(`${this.baseUrl}/user/get-all`);
  }
}
