import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from '../child.guard';

import { RoleGuard } from '../role.guard';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AdminComponent } from './admin.component';
import { WrapperComponent } from './dashboard/components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
]
  // {path: '',canActivateChild:[ChildGuard],
  
  // children:[
   
  //  {path:'adminapproval',component: AdminApprovalComponent}
    
  // ]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
