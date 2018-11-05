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
import { CoursesComponent } from './course-manager/component/courses.component';
import { CourseManagerModule } from './course-manager/course-manager.module';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'registeration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path:'courses', component : CoursesComponent},
  {path: '', redirectTo : 'home', pathMatch: 'full' },
  {path:'**', component: HomeComponent}
];


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    UserModule,
    HomeModule,
    CourseManagerModule
  ],
  providers: [],
})
export class MyRouteModule { }
