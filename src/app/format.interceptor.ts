import { HttpHandler, HttpInterceptor, HttpRequest,HttpEvent,HttpResponse } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import {filter,map} from 'rxjs/operators';


Injectable()

export class formatInterceptor implements HttpInterceptor{

    intercept(HttpRequest:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(HttpRequest).pipe(
            filter(event => event instanceof HttpResponse && HttpRequest.url.includes('format')),
            map((event: HttpResponse<any>) => event.clone({ body: event.body.data.users.list }))
          );
    }
}
/*
    With the httpRequest object, 
    we can inspect the URL of the request 
    and determine if it is a request we want to ignore or modify.
     If the request is to the format API endpoint,
      then we continue and update the response. 
      We also only want to modify the request 
      if the request was a response coming back from our API.


Now that we filter out only the request
 we care about we can update the response body 
 to be a simple array of the users we want to display.


*/




/*

{
  "id": "123",
    "metadata": "blah",
    "data": {
      "users": {
      "count": 4,
      "list": [
        "bob",
        "john",
        "doe"
      ]
    }
  }
}



*/