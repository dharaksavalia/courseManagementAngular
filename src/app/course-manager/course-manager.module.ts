import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagerComponent } from './component/course-manager.component';
import { CoursesComponent } from './component/courses.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CourseManagerComponent, CoursesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CoursesComponent]
})
export class CourseManagerModule { }
