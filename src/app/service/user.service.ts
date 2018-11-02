import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';

const URL = 'https://webdev-mintex.herokuapp.com/api';
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

  constructor(private http: HttpClient) { }
  createUsers(user): Observable<User> {
    console.log(user);
    return this.http.post<User>(URL + '/user', user, httpOptions);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(URL + '/user');
  }
  deleteUsers(userId: number): Observable<null> {
    return this.http.delete<null>(URL + '/user/' + userId);
  }
  loginUsers(user) {
    return this.http.post<User>(URL + '/login', user , httpOptions);
  }
  logtout() {
    return this.http.post<null>(URL + '/logout', {}, httpOptions)
  }
  isUserNameAvaiable(username: String): Observable<User> {
    return this.http.get<User>( URL + '/user/' + username + '/username');
  }
}
