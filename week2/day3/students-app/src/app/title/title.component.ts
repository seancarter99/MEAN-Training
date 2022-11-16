import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title', // HTML TAG NAME
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  // input decorator allows parent to pass in value to child
  @Input()
  title: string = "Default Title";
  constructor() { }

  ngOnInit(): void {
  }

}
