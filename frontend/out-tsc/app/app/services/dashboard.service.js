import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DashboardService {
    http;
    dashboardUrl = `${environment.apiBaseUrl}/api/dashboard`;
    constructor(http) {
        this.http = http;
    }
    getOverview() {
        return this.http.get(`${this.dashboardUrl}/overview`);
    }
    static ɵfac = function DashboardService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
