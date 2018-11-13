import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../service/course.service';
import {MyModuleService} from '../../service/module.service';
import {MyModule} from '../../model/module';

@Component({
  selector: 'app-course',
  templateUrl: '../template/course.component.html',
  styleUrls: ['../style/course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  courseId;
  currentModule: MyModule;
  constructor(private activedRoutes: ActivatedRoute, private courseService: CourseService,
  private moduleService: MyModuleService ) { }

  ngOnInit() {
    this.courseId = this.activedRoutes.snapshot.paramMap.get('id');
    this.renderCourses();
  }
  renderCourses() {
    this.courseService.getCourse(this.courseId)
      .subscribe((response) => {
        console.log(response);
        this.course = response; } );
  }
  createModule(newMoudle) {
    const newMoudleObject: MyModule = {
      title: newMoudle
    }
    this.moduleService.createModule(this.courseId, newMoudleObject)
      .subscribe((response) => {
        this.course.modules.push(response);
      });
  }
  deleteModule(mId: number) {
    this.moduleService.deleteModule(mId).subscribe((response) => {
      this.renderCourses();
    });
  }
  selectModule(module) {
    this.currentModule = module;
  }
}
