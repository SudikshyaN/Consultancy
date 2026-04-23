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

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly authUrl = `${environment.apiBaseUrl}/api/auth`;
  private readonly tokenKey = 'token';
  private readonly userKey = 'user';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/register`, data).pipe(
      tap((res) => this.saveSession(res))
    );
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/login`, data).pipe(
      tap((res) => this.saveSession(res))
    );
  }

  getProfile(): Observable<{ user: AuthUser }> {
    return this.http.get<{ user: AuthUser }>(`${this.authUrl}/me`);
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
