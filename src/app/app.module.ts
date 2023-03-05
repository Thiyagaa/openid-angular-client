import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AuthenticationService } from './shared/authentication.service';
import { CarsService } from './shared/cars.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CarComponent } from './car/car.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent,
    CarComponent,
    ForbiddenComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthConfigModule],
  providers: [
    AuthenticationService,
    CarsService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    console.log('ngOnInit');
    this.authService.authorize();
  }
}
