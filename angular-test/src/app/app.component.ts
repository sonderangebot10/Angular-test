import { Component } from '@angular/core';
import { AuthGuardService } from './_services/auth-guard.service';

@Component({
  selector: 'app-roott',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authGuardService: AuthGuardService) {
    
  }
}
