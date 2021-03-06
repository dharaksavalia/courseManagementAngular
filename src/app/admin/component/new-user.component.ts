import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from 'src/app/model/User';
import { Role } from 'src/app/auth/auth.gaurd';

@Component({
  selector: 'app-new-user',
  templateUrl: '../template/new-user.component.html',
  styleUrls: ['../style/new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Output('register')
  userEmit: EventEmitter<User> = new EventEmitter<User>();
  user: User = {
    username : '',
    firstName : '',
    lastName : '',
    email: '',
    password: '',
    role: Role.STUDENT,
  }
  constructor() { }
  userPattern = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$';
  ngOnInit() {
  }
  registerUser() {
    this.userEmit.emit(this.user);
  }
}
