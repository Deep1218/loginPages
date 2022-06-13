import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  _id?: string;
  name?: string;
  email: string;
  registerType?: string;
  googleId?: string;
  profile?: string;
  phoneNo?: Number;
  password?: string;
}
export interface response {
  status: string;
  message: string;
  user?: User;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: String = 'http://localhost:8000/auth';
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  error: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private httpClient: HttpClient,
    private route: Router,
    private cookieService: CookieService
  ) {
    if (this.cookieService.get('error')) {
      this.error.next(this.cookieService.get('error'));
    }
  }

  logiInUser(userData: any) {
    this.httpClient
      .post<response>(`${this.apiUrl}/login`, userData, {
        withCredentials: true,
      })
      .subscribe((response) => {
        try {
          if (response.status == 'Success') {
            // this.user.next(response.user);
            this.route.navigate(['/home']);
          } else {
            console.log(response.message);
          }
        } catch (error) {
          console.log('Error in logInUser()', error);
        }
      });
  }
  registerUser(userData: any) {
    console.log(userData);
    this.httpClient
      .post<response>(`${this.apiUrl}/register`, userData, {
        withCredentials: true,
      })
      .subscribe((response) => {
        try {
          if (response.status == 'Success') {
            this.user.next(response.user);
            this.route.navigate(['/home']);
          } else {
            console.log(response.message);
          }
        } catch (error) {
          console.log('Error in RegisterUser()', error);
        }
      });
  }
  logOutUser() {
    this.httpClient
      .get<response>(`${this.apiUrl}/logout`, {
        withCredentials: true,
      })
      .subscribe((response) => {
        try {
          if (response.status == 'Success') {
            this.user.next(null);
            // this.route.navigate(['/home']); //TODO change url
          } else {
            console.log(response.message);
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
          if (response.status == 'Success') {
            this.user.next(response.user);
          } else {
            console.log(response.message);
          }
        } catch (error) {
          console.log('Error in getUser()', error);
        }
      });
  }
  forgotPassword(userData: any) {
    return this.httpClient.post<response>(
      `${this.apiUrl}/forgotPassword`,
      userData,
      {
        withCredentials: true,
      }
    );
  }
  clearError() {
    if (this.cookieService.get('error')) {
      console.log('working');
      this.cookieService.delete('error');
      console.log(this.cookieService.delete('error'));
    }
  }
}
