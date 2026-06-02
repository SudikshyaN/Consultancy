import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { finalize, timeout } from 'rxjs';
import { AuthService } from '../../services/auth.services';
import { Layout } from '../layout/layout';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Layout],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  imageUrl = "login.jpg"
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
      firstName: [''],
      lastName: ['', []],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false],
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
    this.successMessage = '';
    this.authForm.reset();

    const firstNameControl = this.authForm.get('firstName');
    const lastNameControl = this.authForm.get('lastName');
    const termsControl = this.authForm.get('terms');

    if (this.isLoginMode) {
      firstNameControl?.clearValidators();
      lastNameControl?.clearValidators();
      termsControl?.clearValidators();
    } else {
      firstNameControl?.setValidators([Validators.required, Validators.minLength(2)]);
      lastNameControl?.setValidators([Validators.required, Validators.minLength(2)]);
      termsControl?.setValidators([Validators.requiredTrue]);
    }

    firstNameControl?.updateValueAndValidity();
    lastNameControl?.updateValueAndValidity();
    termsControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { firstName, lastName, email, password } = this.authForm.value;

    const name = `${firstName} ${lastName}`.trim();
    const request = this.isLoginMode
      ? this.authService.login({ email, password })
      : this.authService.register({ name, email, password });

    request.pipe(
      timeout(8000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.router.navigate(['/dashboard/main']);
      },
      error: (err: any) => {
        this.errorMessage = err.name === 'TimeoutError'
          ? 'Request timed out. Please check that the backend is running.'
          : err.error?.message || (this.isLoginMode
            ? 'Login failed. Please try again.'
            : 'Registration failed. Please try again.');
      }
    });
  }
}
