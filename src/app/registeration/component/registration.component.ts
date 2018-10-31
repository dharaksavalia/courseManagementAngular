import {Component, DoCheck, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: '../template/registration.component.html',
  styleUrls: ['../style/registration.component.css']
})
export class RegistrationComponent implements OnInit, DoCheck {
  profileForm = new FormGroup(
    {
      username : new FormControl(null, [ Validators.required
        , Validators.pattern('^[a-zA-Z0-9]{4,12}$')]),
      password : new FormControl(),
      firstName: new FormControl(),
      lastName : new FormControl(),
      dateOfBirth: new FormControl(),
      email : new FormControl(),
    }
  );
  get username() {
    return this.profileForm.get('username');
  }
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    console.log(this.profileForm.status);
  }
}
