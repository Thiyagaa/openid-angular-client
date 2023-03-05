import { Injectable } from '@angular/core';
import { AuthenticatedResult, LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private readonly authService: OidcSecurityService) {}

  public isAuthenticated$(): Observable<AuthenticatedResult> {
    return this.authService.isAuthenticated$;
  }

  public authorize(): void {
    console.log('Authorize');
    this.authService.authorize();
  }
  public getUserData(): Observable<any> {
    return this.authService
      .getUserData()
      .pipe(
        tap((value) => console.log('getUserData: ', JSON.stringify(value)))
      );
  }
  public checkAuth(): Observable<LoginResponse> {
    return this.authService
      .checkAuth()
      .pipe(tap((value) => console.log('checkAuth: ', JSON.stringify(value))));;
  }
  public getAccessToken(): Observable<string> {
    return this.authService
      .getAccessToken()
      .pipe(
        tap((value) => console.log('getAccessToken: ', JSON.stringify(value)))
      );
  }

  public getIdToken(): Observable<string> {
    return this.authService
      .getIdToken()
      .pipe(tap((value) => console.log('getIdToken: ', JSON.stringify(value))));
  }
  public getRefreshToken(): Observable<string> {
    return this.authService
      .getRefreshToken()
      .pipe(
        tap((value) => console.log('getRefreshToken: ', JSON.stringify(value)))
      );;
  }

  public logOff() {
    return this.authService.logoffLocal();
  }


}
