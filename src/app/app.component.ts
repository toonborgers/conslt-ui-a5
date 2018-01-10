import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'cui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  date = new Date();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://0.0.0.0:8882/v1/translations')
      .subscribe(data => {
        console.log(data);
      });
  }
}
