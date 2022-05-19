import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loginOne',
    loadChildren: () =>
      import('./login-one/login-one.module').then((m) => m.LoginOneModule),
  },
  {
    path: '',
    redirectTo: '/loginOne', //TODO change before devlopment
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
