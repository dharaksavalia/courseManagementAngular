import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../model/course';
import {CourseService} from '../../service/course.service';
import {MyModule} from '../../model/module';

@Component({
  selector: 'app-module',
  templateUrl: '../template/module.component.html',
  styleUrls: ['../style/module.component.css']
})
export class ModuleComponent implements OnInit {
  @Input('module')
  module: MyModule;
  constructor() { }

  ngOnInit() {
  }

}
