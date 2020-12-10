import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { nextTick } from 'process';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()

export class errorInterceptor implements HttpInterceptor{
    intercept(httpRequest:HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
        return next.handle(httpRequest).pipe(retry(2))
    }
}