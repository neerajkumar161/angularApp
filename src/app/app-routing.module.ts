import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AuthService } from './services/auth.service';
import { PagenotfoundComponent } from './dashboard/pagenotfound/pagenotfound.component';

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
    path:'dashboard', loadChildren: () => ( import('./dashboard/dashboard.module').then(m => m.DashboardModule)), canActivate: [AuthService]
  },
  { path: '**', component: PagenotfoundComponent }    // Others path - Not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
