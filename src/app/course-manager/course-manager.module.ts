import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagerComponent } from './component/course-manager.component';
import { CoursesComponent } from './component/courses.component';


@NgModule({
  declarations: [CourseManagerComponent, CoursesComponent],
  imports: [
    CommonModule,
  ],
  exports:[CourseManagerComponent]
})
export class CourseManagerModule { }
