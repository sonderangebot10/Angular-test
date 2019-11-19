import { Component } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  get loggedIn () {
    return this.authGuardService.isLoggedIn;
  };

  constructor(private authGuardService: AuthGuardService) {

  }

  toggleLoggedIn() {
    this.authGuardService.isLoggedIn = !this.authGuardService.isLoggedIn
  }
}
