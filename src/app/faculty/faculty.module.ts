import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';





@NgModule({
  declarations: [
    FacultyComponent,
    
   
  
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    
  
  ],
  exports:[
    FacultyComponent,

  ]
})
export class FacultyModule { }
