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

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((response) => {this.users = response} ,
        (error) => {console.log(error)} ,
        () => {console.log("find")}
        );
  }

}
