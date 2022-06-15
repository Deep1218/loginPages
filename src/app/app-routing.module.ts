import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loginOne',
    loadChildren: () =>
      import('./login-one/login-one.module').then((m) => m.LoginOneModule),
  },
  {
    path: 'loginTwo',
    loadChildren: () =>
      import('./login-two/login-two.module').then((m) => m.LoginTwoModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'loginTwo', //TODO change before completion
    pathMatch: 'full',
  },
  {
    path: 'home-page',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'loginTwo',
    loadChildren: () =>
      import('./login-two/login-two.module').then((m) => m.LoginTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
