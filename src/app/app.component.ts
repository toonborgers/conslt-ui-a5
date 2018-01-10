import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }
}
