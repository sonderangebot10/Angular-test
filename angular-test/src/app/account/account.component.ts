import { Component } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service'

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private authGuardService: AuthGuardService) {

  }

  toggleLoggedIn() {
    this.authGuardService.logout();
  }
}
