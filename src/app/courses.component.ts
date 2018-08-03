import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template:  `
                <h2>{{ title }}</h2>
                <ul>
                <li *ngFor="let courses of courses">{{ courses }}</li>
                </ul>
                `
})

export class CoursesComponent {
    title = 'Courses of List';
    courses;
    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
}
