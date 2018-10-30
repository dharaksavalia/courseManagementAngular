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
  error = false;
  enableNewUser = false;
  message: string;
  btnMessage = 'Add New User';
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getUsers()
      .subscribe((response) => {
        this.error = false;
        this.users = response;
        } ,
        (error) => {
        this.error = true;
        console.log(error);
        } ,
        () => {console.log('find')}
      );
  }

  deleteUsers(userId: number) {
    this.userService.deleteUsers(userId)
      .subscribe(
        (response) => {
          this.error = false;
          this.users = this.users.filter(user => user.id !== userId);
        },(error) => {
          this.error = true;
          this.message = 'Not able to deleted';
          console.log(error)}
      ,() => {console.log('finished deleting')});
  }
  enableDisableNewUserForm() {
    if (this.enableNewUser) {
      this.enableNewUser = false;
      this.btnMessage = 'Add new user';
    } else {
      this.enableNewUser = true;
      this.btnMessage = 'Disable Form';
    }
  }
  registerUser(user: User) {
    this.userService.createUsers(user)
      .subscribe((response) => {
        this.error = true;
        this.message = 'Posted new Users';
        this.users.push(response);
        },
        (error) => {
        this.error = true;
        this.message = 'Not able to create new User';
        console.log(error);
      });
  }
}
