import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  profile?: {
    preferredCountries?: string[];
    studyFields?: string[];
    intakeYear?: string[];
    dob?: string;
    phone?: string;
    nationality?: string;
    city?: string;
    about?: string;
    degree?: string;
    gpa?: string;
    university?: string;
    graduationYear?: string;
    ielts?: string;
    gmat?: string;
    toefl?: string;
    [key: string]: any;
  };
  savedDestinations?: Array<{
    slug: string;
    name: string;
    visa?: string;
    flag?: string;
    savedAt?: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: AuthUser;
}

export interface ForgotPasswordResponse {
  message: string;
  resetToken?: string;
  expiresInMinutes?: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly authUrl = `${environment.apiBaseUrl}/api/auth`;
  private readonly tokenKey = 'token';
  private readonly userKey = 'user';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/register`, data).pipe(
      tap((res) => this.saveSession(res))
    );
  }

  registerAdmin(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/admin/register`, data).pipe(
      tap((res) => this.saveSession(res))
    );
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/login`, data).pipe(
      tap((res) => this.saveSession(res))
    );
  }

  loginAdmin(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/admin/login`, data).pipe(
      tap((res) => this.saveSession(res))
    );
  }

  forgotPassword(email: string): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(`${this.authUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, password: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.authUrl}/reset-password`, { token, password });
  }

  getProfile(): Observable<{ user: AuthUser }> {
    return this.http.get<{ user: AuthUser }>(`${this.authUrl}/me`).pipe(
      tap((res) => {
        if (this.isBrowser()) {
          sessionStorage.setItem(this.userKey, JSON.stringify(res.user));
        }
      })
    );
  }

  updateProfile(data: any): Observable<{ message: string, user: AuthUser }> {
    return this.http.put<{ message: string, user: AuthUser }>(`${this.authUrl}/profile`, data).pipe(
      tap((res) => {
        if (this.isBrowser()) {
          sessionStorage.setItem(this.userKey, JSON.stringify(res.user));
        }
      })
    );
  }

  getToken(): string | null {
    return this.getStorageItem(this.tokenKey);
  }

  getUser(): AuthUser | null {
    const user = this.getStorageItem(this.userKey);

    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    if (this.isBrowser()) {
      sessionStorage.removeItem(this.tokenKey);
      sessionStorage.removeItem(this.userKey);
    }

    this.router.navigate(['/login']);
  }

  private saveSession(res: AuthResponse): void {
    if (!this.isBrowser()) {
      return;
    }

    sessionStorage.setItem(this.tokenKey, res.token);
    sessionStorage.setItem(this.userKey, JSON.stringify(res.user));
  }

  private getStorageItem(key: string): string | null {
    if (!this.isBrowser()) {
      return null;
    }

    return sessionStorage.getItem(key);
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
