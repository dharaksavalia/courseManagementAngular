import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../Service/user.service';
import {User} from '../Model/User';

@Component({
  selector: 'app-admin',
  templateUrl: '../Template/admin.component.html',
  styleUrls: ['../Style/adminpage.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[];
  errorLoading = false;
  errorDeleting = false;
  enableNewUser = false;
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getUsers()
      .subscribe((response) => {
        this.errorLoading = false;
        this.users = response} ,
        (error) => {
        this.errorLoading = true;
        console.log(error)} ,
        () => {console.log('find')}
      );
  }

  deleteUsers(userId: number) {
    this.userService.deleteUsers(userId)
      .subscribe(
        (response) => {
          this.errorDeleting = false;
          this.users = this.users.filter(user => user.id !== userId);
        },(error) => {
          this.errorDeleting = true;
          console.log(error)}
      ,() => {console.log()});
  }
  enableNewUserForm() {
    this.enableNewUser = true;
  }
  disableNewUserForm() {
    this.enableNewUser = false;
  }
}
