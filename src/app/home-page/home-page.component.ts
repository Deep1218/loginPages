import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

interface User {
  _id: String;
  name: String;
  registerType: String;
  googleId: String;
  profile: String;
  phoneNo: Number;
  email: String;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  user!: User;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    if (this.cookieService.get('currentUser')) {
      this.user = JSON.parse(
        this.cookieService
          .get('currentUser')
          .slice(2, this.cookieService.get('currentUser').length)
      );
      // console.log(this.user);
    }
  }
}
