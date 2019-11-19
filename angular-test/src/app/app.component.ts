import { Component } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn1 = false;

  get loggedIn () {
    return this.authGuardService.isLoggedIn;
    //return this.loggedIn1;
  };

  constructor(private authGuardService: AuthGuardService) {
    
  }
}
