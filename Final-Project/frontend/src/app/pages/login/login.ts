import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Layout } from '../layout/layout';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Layout],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  isLoginMode = true;
  authForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name:     ['']
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
    this.successMessage = '';
    this.authForm.reset();

    const nameControl = this.authForm.get('name');

    if (this.isLoginMode) {
      nameControl?.clearValidators();
    } else {
      nameControl?.setValidators([Validators.required, Validators.minLength(2)]);
    }

    nameControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { name, email, password } = this.authForm.value;

    if (this.isLoginMode) {
      this.authService.login({ email, password }).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.successMessage = res.message;
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          this.isLoading = false;
          this.errorMessage = err.error?.message || 'Login failed. Please try again.';
        }
      });
    } else {
      this.authService.register({ name, email, password }).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.successMessage = res.message;
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          this.isLoading = false;
          this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        }
      });
    }
  }
}
