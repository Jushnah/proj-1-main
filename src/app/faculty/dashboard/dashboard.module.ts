import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobpostComponent } from './components/jobpost/jobpost.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { EditfacultyprofileComponent } from './components/editfacultyprofile/editfacultyprofile.component';



@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    JobpostComponent,
    EditfacultyprofileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
  ReactiveFormsModule,
  // NG Material Modules
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatCardModule,
  MDBBootstrapModule.forRoot(),
  
  ]
})
export class DashboardModule { }
