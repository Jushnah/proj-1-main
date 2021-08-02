import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from 'src/app/admin/dashboard/components/job/job.component';
import { JobsViewComponent } from 'src/app/admin/dashboard/components/jobs-view/jobs-view.component';
import { ChildGuard } from 'src/app/child.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';


const routes: Routes = [
  {path:'',component:WrapperComponent,canActivateChild:[ChildGuard],
  children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'job_view',component: JobsViewComponent },
      {path:'job',component: JobComponent },
    
  ]},
  {path:'**',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule{ }