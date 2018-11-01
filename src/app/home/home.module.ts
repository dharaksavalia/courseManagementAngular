import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FullPageDirective} from './fullpage.directive';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  declarations: [HomeComponent,
    FullPageDirective],
  exports: [HomeComponent]
})
export class HomeModule { }
