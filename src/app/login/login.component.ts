import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  otp = '';
  showOtp = false;

  emailError = '';
  otpError = '';

  onChangeEmail() {
  this.showOtp = false;
  this.otp = '';
  this.otpError = '';
}


  constructor(private router: Router) {}

  onSendOtp() {
    this.emailError = '';

    if (!this.email.trim()) {
      this.emailError = 'Email is required';
      return;
    }

    this.showOtp = true;
  }

  onLogin() {
    this.otpError = '';

    if (!this.otp.trim()) {
      this.otpError = 'OTP is required';
      return;
    }

    if (this.otp.length !== 6) {
      this.otpError = 'Please enter correct OTP';
      return;
    }

    this.router.navigate(['/dashboard']);
  }
  }

