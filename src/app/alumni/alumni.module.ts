import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumniComponent } from './alumni.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AlumniComponent,
   
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,
     // NG Material Modules
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatCardModule,
  MDBBootstrapModule.forRoot()
  ],
  exports:[AlumniComponent]
})
export class AlumniModule { }
