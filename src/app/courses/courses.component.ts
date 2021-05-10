import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'Courses List';
  courseList = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'Nodejs'
    },
    {
      id: 3,
      name: 'HTML'
    },
    {
      id: 4,
      name: 'CSS'
    },
    {
      id: 5,
      name: 'JavaScript'
    },
    {
      id: 1,
      name: 'Java'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
