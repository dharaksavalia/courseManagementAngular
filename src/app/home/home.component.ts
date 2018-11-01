import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = {
    title: 'Welcome to Course Manager',
    subtitle: '',
    content: 'Developed by Dharak',
    image: 'assets/home.jpg'

  }
  constructor() { }

  ngOnInit() {
  }

}
