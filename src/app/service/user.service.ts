import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import { AppSettings } from '../app.setting';

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
export class UserService {

  constructor(private http: HttpClient, private appSetting: AppSettings) { }
  createUsers(user): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.appSetting.getEndPoint + '/user', user, httpOptions);
  }
  getUsers(): Observable<User[]> {
    console.log(this.appSetting.getEndPoint);
    return this.http.get<User[]>(this.appSetting.getEndPoint + '/user');
  }
  deleteUsers(userId: number): Observable<null> {
    return this.http.delete<null>(this.appSetting.getEndPoint + '/user/' + userId);
  }
  loginUsers(user) {
    return this.http.post<User>(this.appSetting.getEndPoint + '/login', user , httpOptions);
  }
  logtout() {
    return this.http.post<null>(this.appSetting.getEndPoint + '/logout', {}, httpOptions)
  }
  isUserNameAvaiable(username: String): Observable<User> {
    return this.http.get<User>( this.appSetting.getEndPoint + '/user/' + username + '/username');
  }
}
