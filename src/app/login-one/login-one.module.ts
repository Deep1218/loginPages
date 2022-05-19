import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginOneRoutingModule } from './login-one-routing.module';
import { LoginOneComponent } from './login-one.component';


@NgModule({
  declarations: [
    LoginOneComponent
  ],
  imports: [
    CommonModule,
    LoginOneRoutingModule
  ]
})
export class LoginOneModule { }
