import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: '../template/login.component.html',
  styleUrls: ['../style/login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private fb: FormBuilder) { }
  user = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  get username() {
    return this.user.get('username');
  }
  get password() {
    return this.user.get('password');
  }
  ngOnInit() {
  }
  registerUser() {
    this.userService.loginUsers(this.user.value)
      .subscribe(this.navigateAdmin,(error) => console.log());
  }
  navigateAdmin(user) {
    console.log(user);
  }
}
