import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UniversityService {
    http;
    universitiesUrl = `${environment.apiBaseUrl}/api/universities`;
    constructor(http) {
        this.http = http;
    }
    listAdminUniversities(country) {
        const url = country
            ? `${this.universitiesUrl}/admin?country=${encodeURIComponent(country)}`
            : `${this.universitiesUrl}/admin`;
        return this.http.get(url);
    }
    createUniversity(data) {
        return this.http.post(`${this.universitiesUrl}/admin`, data);
    }
    updateUniversity(id, data) {
        return this.http.put(`${this.universitiesUrl}/admin/${id}`, data);
    }
    deleteUniversity(id) {
        return this.http.delete(`${this.universitiesUrl}/admin/${id}`);
    }
    static ɵfac = function UniversityService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UniversityService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UniversityService, factory: UniversityService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniversityService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
