import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginOneRoutingModule } from './login-one-routing.module';
import { LoginOneComponent } from './login-one.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginOneComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginOneRoutingModule
  ]
})
export class LoginOneModule { }
