import { Injectable } from "@angular/core";
import {  HttpEvent, HttpResponse, HttpRequest,HttpHandler, HttpInterceptor} from '@angular/common/http';
import  { Observable } from 'rxjs';
import {map, filter } from 'rxjs/Operators';



@Injectable()

export class HeaderInterceptor implements HttpInterceptor{
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const API_KEY = '123456';
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
    }
}
//above, we are attaching the API_KEY value as a header to every HTTP request, httpRequest.clone({ setHeaders: { API_KEY } }).

// Now let’s use the HttpClient service to make a HTTP get request. in our component

// If we look at the dev tools in the browser, we can see the network request containing our new header API_KEY with the corresponding value.

// Now with each request, we automatically send our API key without having to duplicate the logic throughout our application.

// For security reasons ensure your Interceptor only sends your API key to the APIs that require it by checking the request URL.

