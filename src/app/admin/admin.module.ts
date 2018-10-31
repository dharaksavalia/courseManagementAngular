import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './component/admin.component';
import {NewUserComponent} from './component/new-user.component';
import {UserService} from '../service/user.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AdminComponent, NewUserComponent],
  providers: [UserService],
  exports: [AdminComponent]
})
export class AdminModule { }
