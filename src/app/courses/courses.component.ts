import { Component, OnInit } from '@angular/core';
import { CourseService, CourseType } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  title = 'Courses List';
  courseList: CourseType[] = [] as CourseType[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseList = this.courseService.courseList;
  }

  addCourse(): void {
    this.courseService.addCourse({
      id: 7,
      name: '.net'
    });
  }
}
