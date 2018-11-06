import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';
import { AppSettings } from 'src/app/app.setting';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router, private userService: UserService,
    private app:AppSettings) { }
  ngOnInit() {}
  logout() {
     this.userService.logtout().subscribe(
       (response) => (this.navigateToLogin()));
  }
  navigateToLogin() {
     this.app.logout();
     this.route.navigate( ['login']);
  }
  get loginOrLogout() {
    if ( this.app.user === null) {
      return 'Login';
    } else {
      return 'Logout';
    }
  }
  get username() {
    return this.app.user.username;
    }


}
