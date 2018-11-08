import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/course.service';
import {Course} from '../../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: '../template/courses.component.html',
  styleUrls: ['../style/courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService: CourseService) {
  }
  newCourse: string;
  courses: Course[];

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe((response) => {
      this.courses = response;
    });
  }
  deleteCourse(courseId: number) {
    this.courseService.deleteCourse(courseId).subscribe((response) => {
      this.courses.filter(course => course.id !== response.id );
    });
  }
  createNewCourse() {
    const course: Course = {
      title: this.newCourse,
      created: new Date(),
      modified: new Date()
    };
    console.log(course);
    this.courseService.createCourse(course).subscribe( (response) => {
      this.courses.push(response);
    });
  }

}
