import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PreferredCountriesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function PreferredCountriesComponent_div_7_Template_div_click_0_listener() { const i_r2 = i0.ɵɵrestoreView(_r1).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setActive(i_r2)); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7)(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵelement(9, "div", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r4 = ctx.$implicit;
    i0.ɵɵclassProp("active", country_r4.active);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r4.flag);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(country_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", country_r4.universities, " universities");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", country_r4.progress, "%");
} }
export class PreferredCountriesComponent {
    countries = [
        {
            flag: '🇺🇸',
            name: 'USA',
            universities: 48,
            progress: 80,
            active: true
        },
        {
            flag: '🇬🇧',
            name: 'UK',
            universities: 36,
            progress: 60,
            active: false
        },
        {
            flag: '🇨🇦',
            name: 'Canada',
            universities: 22,
            progress: 35,
            active: false
        },
        {
            flag: '🇩🇪',
            name: 'Germany',
            universities: 19,
            progress: 30,
            active: false
        }
    ];
    setActive(index) {
        this.countries.forEach((c, i) => c.active = i === index);
    }
    static ɵfac = function PreferredCountriesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PreferredCountriesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PreferredCountriesComponent, selectors: [["app-preferred-countries"]], decls: 8, vars: 1, consts: [[1, "preferred-countries-card"], [1, "header"], [1, "edit-link"], [1, "countries-grid"], ["class", "country-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "country-item", 3, "click"], [1, "flag"], [1, "country-info"], [1, "progress-bar-container"], [1, "progress-bar"]], template: function PreferredCountriesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "Preferred countries");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 2);
            i0.ɵɵtext(5, "Edit \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵtemplate(7, PreferredCountriesComponent_div_7_Template, 10, 7, "div", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.countries);
        } }, dependencies: [CommonModule, i1.NgForOf], styles: [".preferred-countries-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n\n  h2 {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 600;\n    color: #111;\n  }\n\n  .edit-link {\n    color: #2563eb;\n    font-size: 14px;\n    font-weight: 500;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n\n.countries-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.country-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  border-radius: 12px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: #cbd5e1;\n  }\n\n  &.active {\n    background: #eff6ff;\n    border-color: #3b82f6;\n  }\n\n  .flag {\n    font-size: 24px;\n    margin-bottom: 8px;\n  }\n\n  .country-info {\n    h3 {\n      margin: 0;\n      font-size: 16px;\n      font-weight: 600;\n      color: #111827;\n    }\n    p {\n      margin: 4px 0 16px;\n      font-size: 13px;\n      color: #6b7280;\n    }\n  }\n\n  .progress-bar-container {\n    height: 4px;\n    background: #e5e7eb;\n    border-radius: 2px;\n    overflow: hidden;\n    width: 100%;\n\n    .progress-bar {\n      height: 100%;\n      background: #3b82f6;\n      border-radius: 2px;\n    }\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PreferredCountriesComponent, [{
        type: Component,
        args: [{ selector: 'app-preferred-countries', standalone: true, imports: [CommonModule], template: "<div class=\"preferred-countries-card\">\n  <div class=\"header\">\n    <h2>Preferred countries</h2>\n    <a class=\"edit-link\">Edit \u2192</a>\n  </div>\n\n  <div class=\"countries-grid\">\n    <div \n      class=\"country-item\" \n      *ngFor=\"let country of countries; let i = index\"\n      [class.active]=\"country.active\"\n      (click)=\"setActive(i)\"\n    >\n      <div class=\"flag\">{{ country.flag }}</div>\n      <div class=\"country-info\">\n        <h3>{{ country.name }}</h3>\n        <p>{{ country.universities }} universities</p>\n      </div>\n      <div class=\"progress-bar-container\">\n        <div class=\"progress-bar\" [style.width.%]=\"country.progress\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".preferred-countries-card {\n  background: white;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n\n  h2 {\n    margin: 0;\n    font-size: 18px;\n    font-weight: 600;\n    color: #111;\n  }\n\n  .edit-link {\n    color: #2563eb;\n    font-size: 14px;\n    font-weight: 500;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n\n.countries-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.country-item {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  border-radius: 12px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: #cbd5e1;\n  }\n\n  &.active {\n    background: #eff6ff;\n    border-color: #3b82f6;\n  }\n\n  .flag {\n    font-size: 24px;\n    margin-bottom: 8px;\n  }\n\n  .country-info {\n    h3 {\n      margin: 0;\n      font-size: 16px;\n      font-weight: 600;\n      color: #111827;\n    }\n    p {\n      margin: 4px 0 16px;\n      font-size: 13px;\n      color: #6b7280;\n    }\n  }\n\n  .progress-bar-container {\n    height: 4px;\n    background: #e5e7eb;\n    border-radius: 2px;\n    overflow: hidden;\n    width: 100%;\n\n    .progress-bar {\n      height: 100%;\n      background: #3b82f6;\n      border-radius: 2px;\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PreferredCountriesComponent, { className: "PreferredCountriesComponent", filePath: "src/app/pages/dashboard/main/preferred-countries/preferred-countries.ts", lineNumber: 11 }); })();
