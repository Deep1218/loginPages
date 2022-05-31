import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  _id: String;
  name: String;
  registerType: String;
  googleId?: String;
  profile: String;
  phoneNo: Number;
  email: String;
}
interface response {
  message: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8000';
  constructor(private httpClient: HttpClient) {}
  logoutGoogle(): Observable<response> {
    console.log('Working');

    return this.httpClient.get<response>(`${this.apiUrl}/auth/logout`, {
      withCredentials: true,
    });
  }
}
