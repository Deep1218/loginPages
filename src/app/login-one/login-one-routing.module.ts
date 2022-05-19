import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOneComponent } from './login-one.component';

const routes: Routes = [{ path: '', component: LoginOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginOneRoutingModule { }
