import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./university.connector";
export class UniversityService {
    connector;
    constructor(connector) {
        this.connector = connector;
    }
    listAdminUniversities(country) {
        return this.connector.getAdminUniversities(country);
    }
    createUniversity(data) {
        return this.connector.create(data);
    }
    updateUniversity(id, data) {
        return this.connector.update(id, data);
    }
    deleteUniversity(id) {
        return this.connector.delete(id);
    }
    getRecommendations(country) {
        return this.connector.getRecommendations(country);
    }
    static ɵfac = function UniversityService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UniversityService)(i0.ɵɵinject(i1.UniversityConnector)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UniversityService, factory: UniversityService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniversityService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.UniversityConnector }], null); })();
