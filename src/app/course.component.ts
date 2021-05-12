import { Component } from '@angular/core';
import { CourseService, CourseType } from './services/course.service';


@Component({
    selector: 'app-course',
    // template: '<h2>course component</h2>' +
    //     '<p>some details</p>'
    // template: '<h2>course component</h2>\
    //     <p>some details</p>'
    template: `<h2>{{title}}</h2>
        <ul>
        <li *ngFor="let course of courseList ">{{course.name}}</li>
        </ul>
        `
})
export class CourseComponent {
    title = 'Course List';
    courseList: CourseType[] = [] as CourseType[];
    constructor(private courseService: CourseService) {
        this.courseList = this.courseService.courseList;
    }

}

