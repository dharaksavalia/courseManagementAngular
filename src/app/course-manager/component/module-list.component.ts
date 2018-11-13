import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyModule} from '../../model/module';

@Component({
  selector: 'app-module-list',
  templateUrl: '../template/module-list.component.html',
  styleUrls: ['../style/module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  @Input('myModules')
  modules: MyModule[];
  newModule: string;
  @Output('newModule')
  moduleEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output('deleteModule')
  dModule: EventEmitter<number> = new EventEmitter<number>();
  @Output('selectedModule')
  selectModule: EventEmitter<MyModule> = new EventEmitter<MyModule>();
  constructor() { }
  ngOnInit() {
  }
  createNewModule() {
    this.moduleEmitter.emit(this.newModule);
  }
  deleteModule(mId: number) {
    this.dModule.emit(mId);
  }
  selectModuleFunc(module: MyModule) {
    console.log(module);
    this.selectModule.emit(module);
  }

}
