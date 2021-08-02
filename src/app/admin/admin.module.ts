import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminComponent,
    AdminApprovalComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    DashboardModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    AdminApprovalComponent,

    
  ]
})
export class AdminModule { }
