import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginResponse } from 'angular-auth-oidc-client';
import { map } from 'rxjs';
import { AuthenticationService } from './shared/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Can Avtivate route guard');
    return this.loginService.checkAuth().pipe(
      map((e: LoginResponse) => {
        console.log(e.isAuthenticated)
        if (e.isAuthenticated) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
