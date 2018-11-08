import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: '../template/course.component.html',
  styleUrls: ['../style/course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  courseId;
  constructor(private activedRoutes: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.courseId = this.activedRoutes.snapshot.paramMap.get('id');
    this.courseService.getCourse(this.courseId)
      .subscribe((response) => {
        console.log(response);
        this.course = response;} );

  }

}
