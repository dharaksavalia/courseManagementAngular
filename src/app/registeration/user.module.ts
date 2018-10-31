import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './component/registration.component';
import { ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../service/user.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationComponent],
  providers: [UserService],
  exports: [RegistrationComponent]
})
export class UserModule { }
