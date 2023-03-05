import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://accounts.google.com/.well-known/openid-configuration',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId:
          '789982711542-sgbba7i0d0th5dth7shks5vtsq1t4h81.apps.googleusercontent.com',
        scope: 'openid email profile', // 'openid profile ' + your scopes
        responseType: 'id_token token',
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew.html',
        renewTimeBeforeTokenExpiresInSeconds: 10,
        disablePkce: false,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        silentRenewTimeoutInSeconds: 5,
        postLoginRoute: window.location.origin +'/cars'
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}


// 789982711542-sgbba7i0d0th5dth7shks5vtsq1t4h81.apps.googleusercontent.com
// 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
