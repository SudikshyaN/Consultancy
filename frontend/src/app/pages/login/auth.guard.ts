import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {}

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
