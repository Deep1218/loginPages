import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, User } from '../shared/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  user!: User;
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    if (this.cookieService.get('authToken') && !this.user) {
      this.authService.getUser();
    }
  }
  onLogOut() {
    this.authService.logOut();
  }
}
