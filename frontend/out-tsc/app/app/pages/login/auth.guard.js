import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthGuard {
    router;
    platformId = inject(PLATFORM_ID);
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (!isPlatformBrowser(this.platformId)) {
            return true;
        }
        const isLoggedIn = !!sessionStorage.getItem('token');
        if (isLoggedIn) {
            return true;
        }
        return this.router.createUrlTree(['/login']);
    }
    static ɵfac = function AuthGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthGuard)(i0.ɵɵinject(i1.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.Router }], null); })();
