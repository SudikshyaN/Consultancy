import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UniversityConnector {
    http;
    baseUrl = `${environment.apiBaseUrl}/api/universities`;
    constructor(http) {
        this.http = http;
    }
    getAdminUniversities(country) {
        const url = country
            ? `${this.baseUrl}/admin?country=${encodeURIComponent(country)}`
            : `${this.baseUrl}/admin`;
        return this.http.get(url);
    }
    create(data) {
        return this.http.post(`${this.baseUrl}/admin`, data);
    }
    update(id, data) {
        return this.http.put(`${this.baseUrl}/admin/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${this.baseUrl}/admin/${id}`);
    }
    getRecommendations(country) {
        const url = country
            ? `${this.baseUrl}/recommendations?country=${encodeURIComponent(country)}`
            : `${this.baseUrl}/recommendations`;
        return this.http.get(url);
    }
    static ɵfac = function UniversityConnector_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UniversityConnector)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UniversityConnector, factory: UniversityConnector.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniversityConnector, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
