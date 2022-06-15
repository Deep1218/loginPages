import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginTwoRoutingModule } from './login-two-routing.module';
import { LoginTwoComponent } from './login-two.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginTwoComponent,
    CreateAccountComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginTwoRoutingModule
  ]
})
export class LoginTwoModule { }
