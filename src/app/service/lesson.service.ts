import {Injectable} from '@angular/core';
import {AppSettings} from '../app.setting';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Lesson} from '../model/Lesson';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
};
@Injectable({
    providedIn: 'root'
  }
)
export class LessonService {
  constructor(private http: HttpClient, private appSetting: AppSettings) {
  }
  getLessonsOfModule(mId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.appSetting.getEndPoint + '/module/' + mId
      + '/lesson');
  }
  createNewLesson(mId: number, lesson: Lesson): Observable<Lesson> {
    console.log(mId);
    return this.http.post<Lesson>(
      this.appSetting.getEndPoint + '/module/' + mId + '/lesson/',
      lesson, httpOptions
    );
  }
}
