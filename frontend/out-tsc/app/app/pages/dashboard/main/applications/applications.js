import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ApplicationsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8)(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r1.short);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r1.university);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(app_r1.course);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", app_r1.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", app_r1.status, " ");
} }
export class ApplicationsComponent {
    applications = [
        {
            university: 'Massachusetts Institute of Technology',
            course: 'MSc Computer Science · USA',
            status: 'under-review',
            short: 'MIT'
        },
        {
            university: 'University of Oxford',
            course: 'MSc AI & Ethics · UK',
            status: 'applied',
            short: 'OXF'
        },
        {
            university: 'ETH Zurich',
            course: 'MSc Data Science · Switzerland',
            status: 'accepted',
            short: 'ETH'
        },
        {
            university: 'National University of Singapore',
            course: 'MSc Software Engineering · SG',
            status: 'rejected',
            short: 'NUS'
        }
    ];
    static ɵfac = function ApplicationsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApplicationsComponent, selectors: [["app-applications"]], decls: 8, vars: 1, consts: [[1, "applications-card"], [1, "header"], [1, "view-all"], [1, "application-list"], ["class", "app-item", 4, "ngFor", "ngForOf"], [1, "app-item"], [1, "left"], [1, "logo"], [1, "info"], [1, "status", 3, "ngClass"]], template: function ApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "My applications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 2);
            i0.ɵɵtext(5, "View all \u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵtemplate(7, ApplicationsComponent_div_7_Template, 11, 5, "div", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.applications);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf], styles: [".applications-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n}\n\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  color:black;\n}\n\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n}\n\n.view-all[_ngcontent-%COMP%] {\n  color: #2563eb;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.application-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.app-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #eee;\n}\n\n.left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #e5e7eb;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n.info[_ngcontent-%COMP%]{\n    color:black;\n}\n\n.info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 13px;\n  color: #666;\n}\n\n\n\n.status[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.under-review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.applied[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n\n.accepted[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationsComponent, [{
        type: Component,
        args: [{ selector: 'app-applications', standalone: true, imports: [CommonModule], template: "<div class=\"applications-card\">\n  <div class=\"header\">\n    <h2>My applications</h2>\n    <a class=\"view-all\">View all \u2192</a>\n  </div>\n\n  <div class=\"application-list\">\n\n    <div class=\"app-item\" *ngFor=\"let app of applications\">\n\n      <div class=\"left\">\n        <div class=\"logo\">{{ app.short }}</div>\n\n        <div class=\"info\">\n          <h3>{{ app.university }}</h3>\n          <p>{{ app.course }}</p>\n        </div>\n      </div>\n\n      <div class=\"status\" [ngClass]=\"app.status\">\n        {{ app.status }}\n      </div>\n\n    </div>\n\n  </div>\n</div>", styles: [".applications-card {\n  background: #ffffff;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n}\n\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  color:black;\n}\n\n.header h2 {\n  margin: 0;\n  font-size: 20px;\n}\n\n.view-all {\n  color: #2563eb;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.application-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.app-item {\n  background: white;\n  border-radius: 14px;\n  padding: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #eee;\n}\n\n.left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.logo {\n  width: 48px;\n  height: 48px;\n  background: #e5e7eb;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n.info{\n    color:black;\n}\n\n.info h3 {\n  margin: 0;\n  font-size: 15px;\n}\n\n.info p {\n  margin: 2px 0 0;\n  font-size: 13px;\n  color: #666;\n}\n\n/* STATUS BADGES */\n\n.status {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.under-review {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.applied {\n  background: #dbeafe;\n  color: #2563eb;\n}\n\n.accepted {\n  background: #d1fae5;\n  color: #065f46;\n}\n\n.rejected {\n  background: #fee2e2;\n  color: #991b1b;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApplicationsComponent, { className: "ApplicationsComponent", filePath: "src/app/pages/dashboard/main/applications/applications.ts", lineNumber: 11 }); })();
