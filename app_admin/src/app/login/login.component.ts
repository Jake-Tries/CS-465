import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formError: string = '';

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password are required';
      return;
    }

    this.doLogin();
  }

  private doLogin(): void {
    const user = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    this.authenticationService.login(user, this.credentials.password);

    setTimeout(() => {
      if (this.authenticationService.isLoggedIn()) {
        this.router.navigate(['']);
      } else {
        this.formError = 'Login failed. Check email and password.';
      }
    }, 1000);
  }
}