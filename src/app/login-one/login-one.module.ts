import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginOneRoutingModule } from './login-one-routing.module';
import { LoginOneComponent } from './login-one.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    LoginOneComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
  ],
  imports: [CommonModule, LoginOneRoutingModule, ReactiveFormsModule],
})
export class LoginOneModule {}
