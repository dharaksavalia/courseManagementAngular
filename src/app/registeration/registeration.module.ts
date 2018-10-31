import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './component/registration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class RegisterationModule { }
