import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router, private userService: UserService) { }
  ngOnInit() {}
  logout() {
     this.userService.logtout().subscribe(
       (response) => (this.navigateToLogin()));
  }
  navigateToLogin() {
      sessionStorage.clear();
     this.route.navigate(['login']);
  }
  get loginOrLogout() {
    if (sessionStorage.getItem('user') === null) {
      return 'Login';
    } else {
      return 'Logout';
    }
  }

}
