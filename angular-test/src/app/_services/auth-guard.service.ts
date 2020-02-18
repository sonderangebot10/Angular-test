import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  // you would usually put this in it's own service and not access it directly!
  // this is just for the sake of the demo.
  isLoggedIn: boolean = false;

  constructor(
    private router: Router
  ) {}

  getStatus() {
    if (localStorage.getItem('currentUser') != null) {
      return true;
    }
    else return false;
  }

  login() {
    localStorage.setItem('currentUser', JSON.stringify('test'));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('currentUser') != null) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {error: 'Please login to see content', returnUrl: state.url}});
      return false;
    }
  }
}