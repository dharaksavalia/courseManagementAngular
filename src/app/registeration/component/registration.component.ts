import {Component, DoCheck, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';
import {isUserNameAvaliable} from '../../validators/validator-name.validator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: '../template/registration.component.html',
  styleUrls: ['../style/registration.component.css']
})
export class RegistrationComponent implements OnInit, DoCheck {
  profileForm = new FormGroup(
    {
      username : new FormControl('', [ Validators.required
        , Validators.pattern('^[a-zA-Z0-9]{4,12}$')],
        [isUserNameAvaliable(this.userservice)]),
      password : new FormControl('', [ Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{4,12}$')]),
      verifyPassword: new FormControl(''),
      firstName: new FormControl(),
      lastName : new FormControl(),
      dateOfBirth: new FormControl(),
      email : new FormControl(null,[ Validators.email]),
    }
  ,[ this.passwordMatch]);
  constructor( private userservice: UserService, private route: Router) { }
  get username() {
    return this.profileForm.get('username');
  }
  passwordMatch ( group: FormGroup ): {[key: string]: any} | null {
     const innerpassword = group.get('password').value;
     const verifyPassword = group.get('verifyPassword').value;
     if (innerpassword != null && verifyPassword != null) {
        if (innerpassword === verifyPassword) {
          return null;
        }
        return {'mismatchpassword': true};
     }
     return null;
  }
  get password() {
    return this.profileForm.get('password');
  }


  ngOnInit() {
  }
  ngDoCheck() {
  }
  registerUser() {
    this.userservice.createUsers(this.profileForm.value)
      .subscribe((response) => this.route.navigate (['home']));
  }

}
