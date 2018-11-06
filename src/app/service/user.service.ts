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

  constructor(private http: HttpClient, private appSetting:AppSettings) { }
  createUsers(user): Observable<User> {
    console.log(user);
    return this.http.post<User>(AppSettings.getEndPoint + '/user', user, httpOptions);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(AppSettings.getEndPoint + '/user');
  }
  deleteUsers(userId: number): Observable<null> {
    return this.http.delete<null>(AppSettings.getEndPoint + '/user/' + userId);
  }
  loginUsers(user) {
    return this.http.post<User>(AppSettings.getEndPoint + '/login', user , httpOptions);
  }
  logtout() {
    return this.http.post<null>(AppSettings.getEndPoint + '/logout', {}, httpOptions)
  }
  isUserNameAvaiable(username: String): Observable<User> {
    return this.http.get<User>( AppSettings.getEndPoint + '/user/' + username + '/username');
  }
}
