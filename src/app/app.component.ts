import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderWithResults} from './domain/orderWithResults';

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
    this.http.get<OrderWithResults>('http://0.0.0.0:8882/v1/doctors/525324/orders/00100000001')
      .subscribe(data => {
        console.log(data.report);
      });

    // this.http.get('http://0.0.0.0:8882/qsmfioqsdmifj')
    //   .subscribe();

  }
}
