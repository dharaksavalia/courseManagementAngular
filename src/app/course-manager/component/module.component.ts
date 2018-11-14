import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyModule} from '../../model/module';
import {MyModuleService} from '../../service/module.service';

@Component({
  selector: 'app-module',
  templateUrl: '../template/module.component.html',
  styleUrls: ['../style/module.component.css']
})
export class ModuleComponent implements OnInit {
  module: MyModule;
  constructor(private route: ActivatedRoute, private moduleService: MyModuleService) {
    this.route.params.subscribe(params => {
      this.getModule(params['mId']);
    });
  }
  getModule(mId) {
    this.moduleService.getModule(mId)
      .subscribe((response) => {
        this.module = response;
        console.log(this.module);
      });
  }
  ngOnInit() {
  }

}
