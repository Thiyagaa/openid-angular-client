import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { mergeMap, Observable, switchMap } from 'rxjs';
import { AuthenticationService } from '../shared/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authService.checkAuth().pipe(
      mergeMap((user) => {
        //console.log(JSON.stringify(user));
         if (user && user.idToken) {
           request = request.clone({
             setHeaders: {
               Authorization: `Bearer ${user.idToken}`,
             },
           });
         }
        return next.handle(request);
      })
    );
  }
}
