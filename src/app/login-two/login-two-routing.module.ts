import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTwoComponent } from './login-two.component';

const routes: Routes = [
  { path: '', component: LoginTwoComponent },
  // { path: 'forgotPassword', component: ForgotPasswordComponent },
  // { path: 'newAccount', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTwoRoutingModule {}
