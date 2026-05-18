import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    const isLoggedIn = !!sessionStorage.getItem('token');

    if (isLoggedIn) {
      return true;
    }

    return this.router.createUrlTree(['/login']);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    const token = sessionStorage.getItem('token');

    if (!token) {
      return true;
    }

    return this.router.createUrlTree([this.getAuthenticatedRedirect()]);
  }

  private getAuthenticatedRedirect(): string {
    const user = sessionStorage.getItem('user');

    if (!user) {
      return '/dashboard/main';
    }

    try {
      const parsedUser = JSON.parse(user);

      return parsedUser?.role === 'admin' ? '/admin/universities' : '/dashboard/main';
    } catch {
      return '/dashboard/main';
    }
  }
}
