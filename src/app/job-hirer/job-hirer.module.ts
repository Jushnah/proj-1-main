import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobHirerRoutingModule } from './job-hirer-routing.module';
import { JobHirerComponent } from './job-hirer.component';



@NgModule({
  declarations: [
    JobHirerComponent,
    
  ],
  imports: [
    CommonModule,
    JobHirerRoutingModule
  ],
  exports: [
    JobHirerComponent,
 
  ]
})
export class JobHirerModule { }
