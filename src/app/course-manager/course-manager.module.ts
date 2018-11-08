import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagerComponent } from './component/course-manager.component';
import { CoursesComponent } from './component/courses.component';
import {FormsModule} from '@angular/forms';
import { ModuleComponent } from './component/module.component';
import {RouterModule, Routes} from '@angular/router';
import * as path from 'path';
import {Role} from '../auth/auth.gaurd';

const courseManagementRoutes: Routes = [
  { path: 'course',  component: CoursesComponent, data: {role: Role.FACULTY}},
  { path: 'course/:id', component: ModuleComponent, data: {role: Role.FACULTY}}
];

@NgModule({
  declarations: [CourseManagerComponent, CoursesComponent, ModuleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(courseManagementRoutes)
  ],
  exports: [CoursesComponent]
})
export class CourseManagerModule { }
