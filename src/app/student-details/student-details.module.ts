import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details.component';
import { StudentDetailsRoutingModule } from './student-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentDetailsRoutingModule
  ],
  declarations: [StudentDetailsComponent]
})
export class StudentDetailsModule { }
