import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
     // NG Material Modules
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatCardModule,
  MDBBootstrapModule.forRoot()
  
  ]
})
export class DashboardModule { }
