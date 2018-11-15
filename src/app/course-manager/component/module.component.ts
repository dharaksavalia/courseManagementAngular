import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../service/lesson.service';
import {Lesson} from '../../model/Lesson';

@Component({
  selector: 'app-module',
  templateUrl: '../template/module.component.html',
  styleUrls: ['../style/module.component.css']
})
export class ModuleComponent implements OnInit {
  mId: number;
  lessons: Lesson[];
  newLesson: string;
  constructor(private route: ActivatedRoute, private lessonService: LessonService) {
    this.route.params.subscribe(params => {
      this.getLesson(params['mId']);
    });
  }
  getLesson(mId) {
    this.mId = mId;
    this.lessonService.getLessonsOfModule(mId)
      .subscribe((response) => {
        console.log(response);
        this.lessons = response;
      });
  }
  ngOnInit() {
  }
  createNewLesson() {
    const lesson = {
      title: this.newLesson
    };
    this.lessonService.createNewLesson(this.mId, lesson)
      .subscribe((response) => {
        console.log(response);
        this.lessons.push(response);
      });
  }

}
