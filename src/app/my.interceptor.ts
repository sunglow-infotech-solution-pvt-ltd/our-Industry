import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
// Interceptor
// Event
// Response
// Request
// Handler

@Injectable()

export class MyInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(httpRequest);
    }
  }

  // you must register the provider to the app.module for it to properly apply to all application HTTP requests. Interceptors will only intercept requests that are made using the HttpClient service.