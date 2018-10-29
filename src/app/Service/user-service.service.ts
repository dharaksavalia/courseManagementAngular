import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const USER_URL='https://webdev-mintex.herokuapp.com/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  getUsers(){

  }
}
