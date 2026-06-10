import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { finalize, timeout } from 'rxjs';
import { AuthService } from '../../services/auth.services';
import { Layout } from '../layout/layout';

type AuthMode = 'login' | 'register' | 'forgot' | 'reset';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, Layout],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  imageUrl = "login.jpg"
  mode: AuthMode = 'login';
  authForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  isLoading = false;
  resetToken = '';
  resetEmail = '';

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
      confirmPassword: [''],
      terms: [false],
    });

    this.configureFormForMode();
  }

  get isLoginMode(): boolean {
    return this.mode === 'login';
  }

  get isRegisterMode(): boolean {
    return this.mode === 'register';
  }

  get isForgotMode(): boolean {
    return this.mode === 'forgot';
  }

  get isResetMode(): boolean {
    return this.mode === 'reset';
  }

  get title(): string {
    if (this.isForgotMode) return 'Forgot Password';
    if (this.isResetMode) return 'Reset Password';
    return this.isLoginMode ? 'Login' : 'Sign Up';
  }

  toggleMode() {
    this.setMode(this.isLoginMode ? 'register' : 'login');
  }

  startForgotPassword(): void {
    const email = this.authForm.get('email')?.value || '';
    this.setMode('forgot');
    this.authForm.patchValue({ email });
  }

  backToLogin(): void {
    this.setMode('login');
  }

  private setMode(mode: AuthMode): void {
    this.mode = mode;
    this.errorMessage = '';
    this.successMessage = '';
    this.authForm.reset();
    this.resetToken = '';
    this.resetEmail = '';
    this.configureFormForMode();
  }

  private configureFormForMode(): void {
    const firstNameControl = this.authForm.get('firstName');
    const lastNameControl = this.authForm.get('lastName');
    const emailControl = this.authForm.get('email');
    const passwordControl = this.authForm.get('password');
    const confirmPasswordControl = this.authForm.get('confirmPassword');
    const termsControl = this.authForm.get('terms');

    firstNameControl?.clearValidators();
    lastNameControl?.clearValidators();
    emailControl?.setValidators([Validators.required, Validators.email]);
    passwordControl?.clearValidators();
    confirmPasswordControl?.clearValidators();
    termsControl?.clearValidators();

    if (this.isRegisterMode) {
      firstNameControl?.setValidators([Validators.required, Validators.minLength(2)]);
      lastNameControl?.setValidators([Validators.required, Validators.minLength(2)]);
      passwordControl?.setValidators([Validators.required, Validators.minLength(6)]);
      termsControl?.setValidators([Validators.requiredTrue]);
    } else if (this.isLoginMode) {
      passwordControl?.setValidators([Validators.required, Validators.minLength(6)]);
    } else if (this.isResetMode) {
      emailControl?.clearValidators();
      passwordControl?.setValidators([Validators.required, Validators.minLength(6)]);
      confirmPasswordControl?.setValidators([Validators.required]);
    }

    firstNameControl?.updateValueAndValidity();
    lastNameControl?.updateValueAndValidity();
    emailControl?.updateValueAndValidity();
    passwordControl?.updateValueAndValidity();
    confirmPasswordControl?.updateValueAndValidity();
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

    if (this.isForgotMode) {
      this.submitForgotPassword();
      return;
    }

    if (this.isResetMode) {
      this.submitResetPassword();
      return;
    }

    const { firstName, lastName, email, password } = this.authForm.value;
    const name = `${firstName} ${lastName}`.trim();
    const request = this.isLoginMode
      ? this.authService.login({ email, password })
      : this.authService.register({ name, email, password });

    request.pipe(
      timeout(15000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = res.message;
        this.router.navigate(['/dashboard/main']);
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage = err.name === 'TimeoutError'
          ? 'Request timed out. Please check that the backend is running.'
          : err.error?.message || (this.isLoginMode
            ? 'Login failed. Please try again.'
            : 'Registration failed. Please try again.');
      }
    });
  }

  private submitForgotPassword(): void {
    const email = this.authForm.get('email')?.value;

    this.authService.forgotPassword(email).pipe(
      timeout(15000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (res) => {
        this.resetToken = res.resetToken || '';
        this.resetEmail = email;
        this.successMessage = this.resetToken
          ? 'Reset request accepted. Enter your new password below.'
          : res.message;

        if (this.resetToken) {
          this.mode = 'reset';
          this.authForm.reset();
          this.configureFormForMode();
        }
      },
      error: (err: any) => {
        this.errorMessage = err.name === 'TimeoutError'
          ? 'Request timed out. Please check that the backend is running.'
          : err.error?.message || 'Unable to prepare password reset.';
      }
    });
  }

  private submitResetPassword(): void {
    const { password, confirmPassword } = this.authForm.value;

    if (password !== confirmPassword) {
      this.isLoading = false;
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.authService.resetPassword(this.resetToken, password).pipe(
      timeout(15000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (res) => {
        const email = this.resetEmail;
        this.setMode('login');
        this.successMessage = res.message;
        this.authForm.patchValue({ email });
      },
      error: (err: any) => {
        this.errorMessage = err.name === 'TimeoutError'
          ? 'Request timed out. Please check that the backend is running.'
          : err.error?.message || 'Unable to reset password.';
      }
    });
  }
}
