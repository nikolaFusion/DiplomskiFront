import { Observable } from 'rxjs';
import { LoginModel } from './../../models/login-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationModel } from 'src/app/models/registration-model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  baseUrl = 'https://localhost:7116/user';
  constructor(private http: HttpClient) {}

  Registration(newUser: RegistrationModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/registration`, newUser);
  }

  public Login(user: LoginModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/login`, user);
  }

  public GetAll() {
    return this.http.get<string>(`${this.baseUrl}/get-all`);
  }
}
