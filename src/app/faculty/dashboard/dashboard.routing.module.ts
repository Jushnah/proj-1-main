import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from 'src/app/child.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobpostComponent } from './components/jobpost/jobpost.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { EditfacultyprofileComponent } from './components/editfacultyprofile/editfacultyprofile.component';


const routes: Routes = [
  {path:'',component:WrapperComponent,canActivateChild:[ChildGuard],
  children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'jobpost',component:JobpostComponent},
    
  ]},
  {path:'**',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'profile',component:EditfacultyprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
