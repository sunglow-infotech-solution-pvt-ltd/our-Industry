import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public router:Router) { }

  navigateTo(url){
    this.router.navigateByUrl(url)
  }
}
