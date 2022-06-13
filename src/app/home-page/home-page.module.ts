import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, NgbModule],
  providers: [CookieService],
})
export class HomePageModule {}
