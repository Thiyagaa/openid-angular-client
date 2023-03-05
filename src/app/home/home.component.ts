import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(private authService: AuthenticationService,private route: Router) {}

  public login() {
    //console.log('login');
    this.authService.authorize();
    //this.authService.isAuthenticated$().pipe(take(1),this.route.)

    //https://github.com/damienbod/angular-auth-oidc-client/issues/386
    this.route.navigate(['cars']);
  }
}
