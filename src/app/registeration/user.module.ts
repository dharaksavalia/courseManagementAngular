import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './component/registration.component';
import { ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../service/user.service';
import { LoginComponent } from './component/login.component';
import { RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [RegistrationComponent, LoginComponent],
  providers: [UserService],
  exports: [RegistrationComponent, LoginComponent]
})
export class UserModule { }
