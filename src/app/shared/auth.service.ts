import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  error?: string;
  message?: String;
  user?: User;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: String = 'http://localhost:8000/auth';
  user: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient, private route: Router) {}

  logOut() {
    this.httpClient
      .get<response>(`${this.apiUrl}/logout`, {
        withCredentials: true,
      })
      .subscribe((response) => {
        try {
          if (response.message) {
            this.user.next(null);
            // this.route.navigate(['/loginOne']);
          } else {
            throw new Error(response.error);
          }
        } catch (error) {
          console.log('Error in logOut()', error);
        }
      });
  }
  getUser() {
    this.httpClient
      .get<response>(`${this.apiUrl}/user`, { withCredentials: true })
      .subscribe((response) => {
        try {
          if (response.message) {
            this.user.next(response.user);
          } else {
            throw new Error(response.error);
          }
        } catch (error) {
          console.log('Error in getUser()', error);
        }
      });
  }
}
