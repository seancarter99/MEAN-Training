import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-list', // custom HTML TAG NAME
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input()
  students: string[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }

}
