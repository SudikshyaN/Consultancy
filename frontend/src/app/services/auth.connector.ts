import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { PLATFORM_ID, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authConnector: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (!isPlatformBrowser(platformId)) {
    return next(req);
  }

  const token = sessionStorage.getItem('token');

  if (!token) {
    return next(req);
  }

  const authenticatedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authenticatedRequest).pipe(
    catchError((err) => {
      const authRequest = req.url.includes('/api/auth/login') ||
        req.url.includes('/api/auth/admin/login') ||
        req.url.includes('/api/auth/register') ||
        req.url.includes('/api/auth/admin/register');

      if (err.status === 401 && !authRequest) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        router.navigate(['/login']);
      }

      return throwError(() => err);
    })
  );
};
