import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../app.setting';
// @ts-ignore
import {Injectable} from '@angular/core';
import {MyModule} from '../model/module';

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
export class MyModuleService {
  constructor(private http: HttpClient, private appSetting: AppSettings) {
  }
  createModule(courseId: number, moudle: MyModule) {
    return this.http.post<MyModule>(this.appSetting.getEndPoint + '/course/'
      + courseId + '/module', moudle, httpOptions);
  }
  deleteModule(courseId: number) {
    return this.http.delete<MyModule>(this.appSetting.getEndPoint + '/module/' + courseId);
  }
}

