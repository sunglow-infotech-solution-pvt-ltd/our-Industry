import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {observable} from 'rxjs'
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  data: {};
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('/assets/format.json').subscribe(data => this.data = data);
  }

}
/*
  Now in our component, 
  we can subscribe to our data
   without having to dig into the response object, 
   our API returned.

*/