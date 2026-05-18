import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
export class AuthService {
    http;
    router;
    platformId = inject(PLATFORM_ID);
    authUrl = `${environment.apiBaseUrl}/api/auth`;
    tokenKey = 'token';
    userKey = 'user';
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    register(data) {
        return this.http.post(`${this.authUrl}/register`, data).pipe(tap((res) => this.saveSession(res)));
    }
    registerAdmin(data) {
        return this.http.post(`${this.authUrl}/admin/register`, data).pipe(tap((res) => this.saveSession(res)));
    }
    login(data) {
        return this.http.post(`${this.authUrl}/login`, data).pipe(tap((res) => this.saveSession(res)));
    }
    loginAdmin(data) {
        return this.http.post(`${this.authUrl}/admin/login`, data).pipe(tap((res) => this.saveSession(res)));
    }
    getProfile() {
        return this.http.get(`${this.authUrl}/me`);
    }
    updateProfile(data) {
        return this.http.put(`${this.authUrl}/profile`, data).pipe(tap((res) => {
            if (this.isBrowser()) {
                sessionStorage.setItem(this.userKey, JSON.stringify(res.user));
            }
        }));
    }
    getToken() {
        return this.getStorageItem(this.tokenKey);
    }
    getUser() {
        const user = this.getStorageItem(this.userKey);
        return user ? JSON.parse(user) : null;
    }
    isLoggedIn() {
        return !!this.getToken();
    }
    logout() {
        if (this.isBrowser()) {
            sessionStorage.removeItem(this.tokenKey);
            sessionStorage.removeItem(this.userKey);
        }
        this.router.navigate(['/login']);
    }
    saveSession(res) {
        if (!this.isBrowser()) {
            return;
        }
        sessionStorage.setItem(this.tokenKey, res.token);
        sessionStorage.setItem(this.userKey, JSON.stringify(res.user));
    }
    getStorageItem(key) {
        if (!this.isBrowser()) {
            return null;
        }
        return sessionStorage.getItem(key);
    }
    isBrowser() {
        return isPlatformBrowser(this.platformId);
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }], null); })();
