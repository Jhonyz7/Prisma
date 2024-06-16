import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string ='';
  password: string='';

  constructor(private authService: AuthService) {}
  login() {
    this.authService.login(this.email, this.password);
  }

  googleLogin() {
    this.authService.googleLogin();
  }
  ngOnInit() {
  }
}