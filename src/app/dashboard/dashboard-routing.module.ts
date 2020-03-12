import { AdduserComponent } from './adduser/adduser.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component'
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'adduser', component:AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
