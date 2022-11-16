import { Component } from '@angular/core';

// decorator -- tells Angular how to use this class
@Component({
  selector: 'app-root', // becomes a custom HTTML TAG NAME
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students App';

  currentStudents: string[] = ["Bob", "Sue", "Harry", "Ron", "Hermione"];
  pastStudents: string[] = ["Jo"];

  hello() {
    console.log("hello")
  }
}
