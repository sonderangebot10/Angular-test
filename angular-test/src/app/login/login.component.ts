import { Component } from '@angular/core';
import { AuthGuardService } from '../_services/auth-guard.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authGuardService: AuthGuardService) {
      if(this.authGuardService.getStatus()) {
        this.router.navigate(['/']);
      }

      this.route.queryParams.subscribe(params => {
        this.error = params.error;
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  };

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;

      setTimeout(()=>{
        if(this.f.username.value != 'test' || this.f.password.value != 'test'){
          this.loading = false;
          this.error = 'Wrong login information';
          return;
        }

        this.authGuardService.login();
        this.router.navigate([this.returnUrl]);
      }, 1000);

     
  }
}
