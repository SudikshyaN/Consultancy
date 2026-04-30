import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, timeout } from 'rxjs';
import { AuthService } from '../../../services/auth.services';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-auth.html',
  styleUrl: './admin-auth.scss'
})
export class AdminAuthComponent {
  protected isLoginMode = true;
  protected isLoading = false;
  protected errorMessage = '';
  protected authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';

    const nameControl = this.authForm.get('name');

    if (this.isLoginMode) {
      nameControl?.clearValidators();
    } else {
      nameControl?.setValidators([Validators.required, Validators.minLength(2)]);
    }

    nameControl?.updateValueAndValidity();
    this.authForm.reset();
  }

  submit(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const { name, email, password } = this.authForm.value;
    const request = this.isLoginMode
      ? this.authService.loginAdmin({ email, password })
      : this.authService.registerAdmin({ name, email, password });

    request.pipe(
      timeout(8000),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: () => {
        this.router.navigate(['/admin/universities']);
      },
      error: (err: any) => {
        this.errorMessage = err.name === 'TimeoutError'
          ? 'Login request timed out. Please check that the backend is running.'
          : err.error?.message || 'Unable to continue right now.';
      },
    });
  }
}
