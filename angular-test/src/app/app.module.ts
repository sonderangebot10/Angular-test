import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { AccountComponent } from './account/account.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ModifyComponent } from './modify/modify.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'

import { AuthGuardService } from './_services/auth-guard.service'

const appRoutes: Routes = [
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService]},
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'modify', component: ModifyComponent, canActivate: [AuthGuardService]},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashboardComponent,
    ModifyComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [ AuthGuardService]
})
export class AppModule { }
