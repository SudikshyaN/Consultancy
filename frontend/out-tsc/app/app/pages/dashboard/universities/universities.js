import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DashboardUniversitiesComponent {
    universities = [
        {
            name: 'University of Melbourne',
            country: 'Australia',
            program: 'MSc Information Systems',
            tuition: 'AUD 48k / year',
            status: 'Recommended',
        },
        {
            name: 'University of Toronto',
            country: 'Canada',
            program: 'MEng Computer Engineering',
            tuition: 'CAD 67k / year',
            status: 'Popular',
        },
        {
            name: 'University of Manchester',
            country: 'United Kingdom',
            program: 'MSc Data Science',
            tuition: 'GBP 31k / year',
            status: 'Saved',
        },
    ];
    static ɵfac = function DashboardUniversitiesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardUniversitiesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardUniversitiesComponent, selectors: [["app-dashboard-universities"]], decls: 9, vars: 0, consts: [[1, "dashboard-card-content", "universities-page"], [1, "page-header"], [1, "eyebrow"], ["type", "button", 1, "primary-btn"]], template: function DashboardUniversitiesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "University finder");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "h1");
            i0.ɵɵtext(6, "Universities");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(7, "button", 3);
            i0.ɵɵtext(8, "Compare");
            i0.ɵɵdomElementEnd()()();
        } }, dependencies: [CommonModule], styles: [".universities-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 76px);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin: 0 0 6px;\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.primary-btn[_ngcontent-%COMP%], \n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border: 0;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  padding: 11px 16px;\n}\n\n.university-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.university-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 22px;\n}\n\n.card-top[_ngcontent-%COMP%], \n.card-footer[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.status[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  border-radius: 999px;\n  color: #075985;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 6px 10px;\n}\n\n.country[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 700;\n}\n\n.university-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.2rem;\n  margin: 22px 0 8px;\n}\n\n.university-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 26px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #eef2f7;\n  padding-top: 16px;\n}\n\n.card-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 800;\n}\n\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #16a34a;\n  padding: 9px 14px;\n}\n\n@media (max-width: 1100px) {\n  .university-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 14px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardUniversitiesComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-universities', standalone: true, imports: [CommonModule], template: "<section class=\"dashboard-card-content universities-page\">\n  <div class=\"page-header\">\n    <div>\n      <p class=\"eyebrow\">University finder</p>\n      <h1>Universities</h1>\n    </div>\n    <button type=\"button\" class=\"primary-btn\">Compare</button>\n  </div>\n</section>\n", styles: [".universities-page {\n  min-height: calc(100vh - 76px);\n}\n\n.page-header {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n\n.eyebrow {\n  color: #4f46e5;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin: 0 0 6px;\n  text-transform: uppercase;\n}\n\nh1 {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.primary-btn,\n.card-footer button {\n  background: #2563eb;\n  border: 0;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  padding: 11px 16px;\n}\n\n.university-grid {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.university-card {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 22px;\n}\n\n.card-top,\n.card-footer {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.status {\n  background: #e0f2fe;\n  border-radius: 999px;\n  color: #075985;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 6px 10px;\n}\n\n.country {\n  color: #64748b;\n  font-weight: 700;\n}\n\n.university-card h2 {\n  color: #111827;\n  font-size: 1.2rem;\n  margin: 22px 0 8px;\n}\n\n.university-card p {\n  color: #64748b;\n  margin: 0 0 26px;\n}\n\n.card-footer {\n  border-top: 1px solid #eef2f7;\n  padding-top: 16px;\n}\n\n.card-footer span {\n  color: #0f172a;\n  font-weight: 800;\n}\n\n.card-footer button {\n  background: #16a34a;\n  padding: 9px 14px;\n}\n\n@media (max-width: 1100px) {\n  .university-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  .page-header {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 14px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardUniversitiesComponent, { className: "DashboardUniversitiesComponent", filePath: "src/app/pages/dashboard/universities/universities.ts", lineNumber: 19 }); })();
