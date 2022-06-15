import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginTwoComponent } from './login-two.component';

const routes: Routes = [
  { path: '', component: LoginTwoComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'signup', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTwoRoutingModule {}
