import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ServerService } from '../provider/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
currUrl:string ='';
  constructor(public service:ServerService) {
   this.currUrl = JSON.stringify(window.location.href.split('/')[3])
    console.log(this.currUrl)
   }

  ngOnInit(): void {
  }

  

}
