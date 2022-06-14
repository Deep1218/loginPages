import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

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
  imports: [
    CommonModule,
    LoginOneRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ComponentsModule,
  ],
})
export class LoginOneModule {}
