import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminpageComponent } from './Component/adminpage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterationFormComponent } from './Component/registeration-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    RegisterationFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
