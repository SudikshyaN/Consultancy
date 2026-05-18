import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardNavComponent } from '../../shared/components/navbar/nav';
import { DashboardSidebarComponent } from '../../shared/sidebar/sidebar';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth.services";
export class DashboardComponent {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    get user() {
        return this.authService.getUser();
    }
    logout() {
        this.authService.logout();
    }
    static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 0, consts: [[1, "dashboard-page"], [1, "dashboard-layout"], [3, "logoutClicked"], [1, "dashboard-main"], [1, "dashboard-body"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "app-dashboard-sidebar", 2);
            i0.ɵɵlistener("logoutClicked", function DashboardComponent_Template_app_dashboard_sidebar_logoutClicked_2_listener() { return ctx.logout(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "app-dashboard-nav");
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelement(6, "router-outlet");
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [CommonModule, RouterOutlet, DashboardNavComponent, DashboardSidebarComponent], styles: [".dashboard-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #0b1d2a;\n}\n\n.dashboard-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  position: relative;\n  min-height: calc(100vh - 28px);\n}\n\n.dashboard-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  \n}\n\n.dashboard-body[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  flex: 1;\n  min-height: 0;\n  padding: 42px;\n}\n\n@media (max-width: 900px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .dashboard-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n  }\n\n  .dashboard-main[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  .dashboard-body[_ngcontent-%COMP%] {\n    border-radius: 0;\n    min-height: auto;\n  }\n}\n.app-dashboard-sidebar[_ngcontent-%COMP%]{\n    position: sticky;\n    top: 0;\n    left: 0;\n    height: 100%;\n}\n.app-dashboard-nav[_ngcontent-%COMP%]{\n  position: sticky;\n  top: 0;              \n  z-index: 1000;\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', imports: [CommonModule, RouterOutlet, DashboardNavComponent, DashboardSidebarComponent], template: "<section class=\"dashboard-page\">\n  <div class=\"dashboard-layout\">\n    <app-dashboard-sidebar (logoutClicked)=\"logout()\"></app-dashboard-sidebar>\n\n    <div class=\"dashboard-main\">\n      <app-dashboard-nav></app-dashboard-nav>\n\n      <div class=\"dashboard-body\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: [".dashboard-page {\n  min-height: 100vh;\n  background: #0b1d2a;\n}\n\n.dashboard-layout {\n  display: flex;\n  gap: 0;\n  position: relative;\n  min-height: calc(100vh - 28px);\n}\n\n.dashboard-main {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  \n}\n\n.dashboard-body {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  flex: 1;\n  min-height: 0;\n  padding: 42px;\n}\n\n@media (max-width: 900px) {\n  .dashboard-page {\n    padding: 0;\n  }\n\n  .dashboard-layout {\n    flex-direction: column;\n    min-height: 100vh;\n  }\n\n  .dashboard-main {\n    padding-left: 0;\n  }\n\n  .dashboard-body {\n    border-radius: 0;\n    min-height: auto;\n  }\n}\n.app-dashboard-sidebar{\n    position: sticky;\n    top: 0;\n    left: 0;\n    height: 100%;\n}\n.app-dashboard-nav{\n  position: sticky;\n  top: 0;              \n  z-index: 1000;\n\n}"] }]
    }], () => [{ type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 14 }); })();
