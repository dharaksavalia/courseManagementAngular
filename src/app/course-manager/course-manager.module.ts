import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagerComponent } from './component/course-manager.component';
import { CourseComponent } from '../courseManager/course/course.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [CourseManagerComponent, CourseComponent, CoursesComponent],
  imports: [
    CommonModule
  ],
  exports:[CourseManagerComponent]
})
export class CourseManagerModule { }
