import { Injectable } from '@angular/core';
import {AppSettings} from '../app.setting';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private app: AppSettings, private http: HttpClient) { }


  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.app.getEndPoint + '/course');
  }
  deleteCourse(courseId: number): Observable<Course> {
    return this.http.delete<Course>(this.app.getEndPoint + '/course/' + courseId);
  }


  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.app.getEndPoint + '/course',
      course, httpOptions);
  }
}
