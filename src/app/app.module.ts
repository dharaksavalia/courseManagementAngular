import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './Component/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewUserComponent } from './Component/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './Service/user.service';
import {FormsModule} from '@angular/forms';
import {RegisterationModule} from './registeration/registeration.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RegisterationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
