import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path:'', loadChildren: () => ( import('./home/home.module').then(m=> m.HomeModule))
  },
  {
    path:'login', loadChildren: () => ( import('./login/login.module').then(m=> m.LoginModule))
  },
  {
    path:'signup', loadChildren: () => ( import('./signup/signup.module').then(m => m.SignupModule))
  },
  {
    path:'dashboard', loadChildren: () => ( import('./dashboard/dashboard.module').then(m => m.DashboardModule))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
