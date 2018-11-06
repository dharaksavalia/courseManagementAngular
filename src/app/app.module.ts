import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';
import {UserModule} from './registeration/user.module';
import {AdminModule} from './admin/admin.module';
import {MyRouteModule} from './router.module';
import {HeaderModule} from './header/header.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import { AppSettings } from './app.setting';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    UserModule,
    AdminModule,
    MyRouteModule,
    HeaderModule,
    RouterModule,
    HomeModule
  ],
  providers: [UserService, AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
