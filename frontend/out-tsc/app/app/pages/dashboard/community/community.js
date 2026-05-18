import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DashboardCommunityComponent {
    static ɵfac = function DashboardCommunityComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardCommunityComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardCommunityComponent, selectors: [["app-dashboard-community"]], decls: 3, vars: 0, consts: [[1, "dashboard-card-content"]], template: function DashboardCommunityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "h1");
            i0.ɵɵtext(2, "Community");
            i0.ɵɵdomElementEnd()();
        } }, dependencies: [CommonModule], styles: [".dashboard-card-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardCommunityComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-community', standalone: true, imports: [CommonModule], template: "<section class=\"dashboard-card-content\">\n  <h1>Community</h1>\n</section>\n", styles: [".dashboard-card-content h1 {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardCommunityComponent, { className: "DashboardCommunityComponent", filePath: "src/app/pages/dashboard/community/community.ts", lineNumber: 11 }); })();
