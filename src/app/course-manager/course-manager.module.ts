import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagerComponent } from './component/course-manager.component';
import { CoursesComponent } from './component/courses.component';
import {FormsModule} from '@angular/forms';
import { ModuleComponent } from './component/module.component';
import {RouterModule, Routes} from '@angular/router';
import {Role} from '../auth/auth.gaurd';
import { CourseComponent } from './component/course.component';
import { ModuleListComponent } from './component/module-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const courseManagementRoutes: Routes = [
  { path: 'course',  component: CoursesComponent, data: {role: Role.FACULTY}},
  { path: 'course/:id', component: CourseComponent, data: {role: Role.FACULTY},
  children: [
    {path: 'module/:mId', component: ModuleComponent, data: {role:Role.FACULTY}}
  ]}
];

@NgModule({
  declarations: [CourseManagerComponent, CoursesComponent, ModuleComponent, CourseComponent, ModuleListComponent],
  imports: [
    DragDropModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(courseManagementRoutes)
  ],
  exports: [CoursesComponent]
})
export class CourseManagerModule { }
