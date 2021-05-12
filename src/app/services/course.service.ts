import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class CourseService {
    private courses: CourseType[] = [
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
            id: 6,
            name: 'Java'
        }
    ];
    get courseList(): CourseType[] {
        return this.courses;
    }
    addCourse(value: CourseType): void {
        this.courses.push(value);
    }

}

export interface CourseType {
    id: number;
    name: string;
}
