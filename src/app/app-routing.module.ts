import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { JobsViewComponent } from './admin/dashboard/components/jobs-view/jobs-view.component';
import { AuthGuard } from './auth.guard';
import { ChildGuard } from './child.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterAlumniComponent } from './register-alumni/register-alumni.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home',component: HomeComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'register-alumni',component:RegisterAlumniComponent},
  {path: 'register-employer',component: RegisterEmployerComponent},

  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'jobvaccancy',
    component: JobsViewComponent 
  },
  {
    path:'logout',
    component:LogoutComponent,canActivate:[AuthGuard],
  },
  { path: 'alumnipage',canActivate:[RoleGuard], data: {userType:'Alumni'}, loadChildren: () => import('./alumni/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'facultyhome',canActivate:[RoleGuard], data: {userType: 'Faculty'},loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)},
  { path: 'Hirerhome',canActivate:[RoleGuard], data: {userType: 'Employer'}, loadChildren: () => import('./job-hirer/job-hirer.module').then(m => m.JobHirerModule)},
  { path: 'adminhome', canActivate:[RoleGuard],data: {userType: 'Admin'},loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
