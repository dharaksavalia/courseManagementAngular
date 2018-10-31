import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/User';

const URL = 'https://webdev-mintex.herokuapp.com/api/user';
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
    return this.http.post<User>(URL, user, httpOptions);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(URL);
  }
  deleteUsers(userId: number): Observable<null> {
    return this.http.delete<null>(URL + '/' + userId);
  }
}
