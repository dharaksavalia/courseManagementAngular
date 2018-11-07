import { Injectable } from '@angular/core';
import {AppSettings} from '../app.setting';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(app: AppSettings) { }

}
