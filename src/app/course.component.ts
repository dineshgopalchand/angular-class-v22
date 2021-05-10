import { Component } from '@angular/core';


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

}
