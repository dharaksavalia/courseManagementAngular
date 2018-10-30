import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Model/User';

const URL = 'https://webdev-mintex.herokuapp.com/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(URL);
  }
  deleteUsers(userId: number): Observable<null> {
    return this.http.delete<null>(URL + '/' + userId);
  }
}
