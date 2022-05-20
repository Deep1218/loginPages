import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginOneComponent } from './login-one.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: '', component: LoginOneComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'newAccount', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginOneRoutingModule {}
