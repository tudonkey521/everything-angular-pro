import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/base-components/forgot-password/forgot-password.component';
import { LandingPageComponent } from './ui-constants/landing-page/landing-page.component';
import { LoginComponent } from './pages/base-components/login/login.component';
import { PageNotFoundComponent } from './pages/base-components/page-not-found/page-not-found.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    //if the page not found then redirect to pagenotfound component
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent,
  },
  {
    //if no routes or path is provided, redirect to login
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    //Implementing lazyloading
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
