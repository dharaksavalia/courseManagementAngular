import { Injectable } from '@angular/core';
import {AppSettings} from '../app.setting';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private app: AppSettings, private http: HttpClient) { }


  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.app.getEndPoint + 'course');
  }


}
