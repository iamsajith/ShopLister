import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
 } from '@angular/common/http';
 import { Injectable, Injector } from '@angular/core';
 import { Observable } from 'rxjs';
 import { AuthService } from './auth.service';
 
 @Injectable({
  providedIn: 'root',
 })
 export class TokeninterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let authService = this.injector.get(AuthService);
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `token ${authService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
 }