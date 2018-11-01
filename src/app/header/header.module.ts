
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
