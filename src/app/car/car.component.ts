import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass'],
})
export class CarComponent implements OnInit{
  cars: string[] | undefined;
  constructor(
    private authService: AuthenticationService,
    private carService: CarsService
  ) {}
  ngOnInit(): void {
    //console.log('ngOnInit');
    this.authService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        console.log('Authenticated : %s', isAuthenticated);
      });
  }

  public login() {
    //console.log('login');
    return this.authService.authorize();
  }
  public checkAuth() {
    //console.log('checkAuth');
    return this.authService.checkAuth();
  }

  public logout() {
    //console.log('logout');
    return this.authService.logOff();
  }

  public getRefreshToken() {
    return this.authService.getRefreshToken();
  }

  public getAuthToken() {
    //console.log('getAuthToken');
    return this.authService.getAccessToken();
  }

  public getIdToken() {
    //console.log('getIdToken');
    return this.authService.getIdToken();
  }
  public getCars() {
    //console.log('getCars');
    return this.carService.getCars().subscribe((d) => {
      this.cars = d;
    });
  }
}
