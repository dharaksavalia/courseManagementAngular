import {Component, Input, OnInit} from '@angular/core';
import {MyModule} from '../../model/module';

@Component({
  selector: 'app-module-list',
  templateUrl: '../template/module-list.component.html',
  styleUrls: ['../style/module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  @Input('myModules')
  modules: MyModule[];
  constructor() { }
  ngOnInit() {
  }

}
