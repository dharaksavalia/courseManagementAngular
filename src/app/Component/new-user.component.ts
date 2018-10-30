import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from 'src/app/Model/User';

@Component({
  selector: 'app-new-user',
  templateUrl: '../Template/new-user.component.html',
  styleUrls: ['../Style/new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Output('registerUser')
  userEmit: EventEmitter<User> = new EventEmitter<User>();
  user: User = {
    username : '',
    firstName : '',
    lastName : '',
    email: '',
    password: '',
    role: ''
  }
  constructor() { }

  ngOnInit() {
  }
  registerUser() {
    this.userEmit.emit(this.user);
  }
}
