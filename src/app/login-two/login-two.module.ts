import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginTwoRoutingModule } from './login-two-routing.module';
import { LoginTwoComponent } from './login-two.component';


@NgModule({
  declarations: [
    LoginTwoComponent
  ],
  imports: [
    CommonModule,
    LoginTwoRoutingModule
  ]
})
export class LoginTwoModule { }
