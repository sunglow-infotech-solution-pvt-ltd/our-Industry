import { Component, OnInit } from '@angular/core';
import { ServerService } from '../provider/server.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(public service:ServerService) { }

  ngOnInit(): void {
  }

}
