import { BrowserModule } from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/component/admin.component';
import {RegistrationComponent} from './registeration/component/registration.component';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './registeration/user.module';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './registeration/component/login.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'registeration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
]


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    UserModule,
    HomeModule
  ],
  providers: [],
})
export class MyRouteModule { }
