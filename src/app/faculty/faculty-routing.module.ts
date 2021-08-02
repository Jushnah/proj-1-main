import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from '../child.guard';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { WrapperComponent } from './dashboard/components/wrapper/wrapper.component';
import { FacultyComponent } from './faculty.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
