import { Component } from '@angular/core';
import { Student } from './models/student';

// decorator -- tells Angular how to use this class
@Component({
  selector: 'app-root', // becomes a custom HTTML TAG NAME
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students App';

  currentStudents: Student[] = [{name: "Bob"}, {name: "Sue", tuition: 40000}, {name: "Harry", tuition: 0}];
  pastStudents: Student[] = [{name: "Jo"}];

  hello() {
    console.log("hello")
  }

  addStudent(value: Student) {
    this.currentStudents.push(value);
  }
}
