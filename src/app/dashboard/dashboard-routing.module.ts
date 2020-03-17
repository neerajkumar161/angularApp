import { AdduserComponent } from './adduser/adduser.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component'
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'adduser', component:AdduserComponent
  },
  {
    path:'userlist', component: UserListComponent 
  },
  {
    path:'productlist', component:ProductListComponent
  },
  {
    path:'product/:productId', component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
