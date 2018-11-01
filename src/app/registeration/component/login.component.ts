import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../template/login.component.html',
  styleUrls: ['../style/login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private fb: FormBuilder, private  router: Router) { }
  user = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,12}$')]],
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{4,12}$')]]
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
    sessionStorage.setItem('user', user);
    this.router.navigate(['home']);
  }


}
