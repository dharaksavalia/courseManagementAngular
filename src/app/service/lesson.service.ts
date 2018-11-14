import {Injectable} from '@angular/core';
import {AppSettings} from '../app.setting';
import {HttpClient} from '@angular/common/http';
import {Lesson} from '../model/Lesson';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  }
)
export class LessonService {
  constructor(private http: HttpClient, private appSetting: AppSettings) {
  }
  getLessonsOfModule(mId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.appSetting.getEndPoint + '/module/' + mId
      + 'lessons');
  }
}
