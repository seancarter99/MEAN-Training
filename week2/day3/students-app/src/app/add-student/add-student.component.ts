import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-add-student', // HTML TAG NAME
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  // decorator output tells Angular this value is interacting with the parent
  @Output()
  newStudentEvent = new EventEmitter<Student>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewStudent(value: string) {
    this.newStudentEvent.emit({name: value});
  }

}
