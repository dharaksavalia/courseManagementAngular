import { BrowserModule } from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/component/admin.component';
import {RegistrationComponent} from './registeration/component/registration.component';

const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'registeration', component: RegistrationComponent}
]


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminComponent,
    RegistrationComponent
  ],
  providers: [],
})
export class MyRouteModule { }
