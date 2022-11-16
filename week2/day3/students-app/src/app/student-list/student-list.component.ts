import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list', // custom HTML TAG NAME
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input()
  title?: string; // we are not providing a default
                  // ? tells TypeScript this value might be undefined
                  // alertantive is " string | undefined"

  @Input()
  students: Student[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }

}
