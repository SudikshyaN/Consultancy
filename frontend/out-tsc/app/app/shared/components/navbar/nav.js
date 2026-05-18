import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/auth.services";
export class DashboardNavComponent {
    authService;
    todayLabel = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date());
    constructor(authService) {
        this.authService = authService;
    }
    get user() {
        return this.authService.getUser();
    }
    static ɵfac = function DashboardNavComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardNavComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardNavComponent, selectors: [["app-dashboard-nav"]], decls: 11, vars: 3, consts: [[1, "dashboard-topbar"], [1, "topbar-copy"], [1, "topbar-title"], [1, "wave"], [1, "topbar-subtitle"], [1, "right-tools"], [1, "user-badge"]], template: function DashboardNavComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵdomElementStart(4, "span", 3);
            i0.ɵɵtext(5, "\uD83D\uDC4B");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(6, "div", 4);
            i0.ɵɵtext(7);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "div", 5)(9, "div", 6);
            i0.ɵɵtext(10);
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Hello , ", (ctx.user == null ? null : ctx.user.name) || "Student", " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.todayLabel);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate((ctx.user == null ? null : ctx.user.name == null ? null : ctx.user.name.charAt(0)) || "S");
        } }, dependencies: [CommonModule], styles: [".dashboard-topbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e8e2db;\n  \n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 20px;\n}\n\n.topbar-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.topbar-title[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.65rem;\n  font-weight: 700;\n}\n\n.wave[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  vertical-align: middle;\n}\n\n.topbar-subtitle[_ngcontent-%COMP%] {\n  color: #7c8798;\n  font-size: 0.92rem;\n}\n\n.topbar-tools[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 14px;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #f4f1ec;\n  border-radius: 12px;\n  color: #98a2b3;\n  display: flex;\n  font-size: 0.92rem;\n  min-height: 44px;\n  min-width: 220px;\n  padding: 0 16px;\n}\n\n.user-badge[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #5b5ce2;\n  border-radius: 999px;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  height: 42px;\n  justify-content: center;\n  width: 42px;\n}\n\n@media (max-width: 900px) {\n  .dashboard-topbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  .topbar-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n\n  .topbar-tools[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .search-box[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardNavComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-nav', standalone: true, imports: [CommonModule], template: "<header class=\"dashboard-topbar\">\n  <div class=\"topbar-copy\">\n    <div class=\"topbar-title\">\n      Hello , {{ user?.name || 'Student' }}\n      <span class=\"wave\">\uD83D\uDC4B</span>\n    </div>\n    <div class=\"topbar-subtitle\">{{ todayLabel }}</div>\n  </div>\n\n  <div class=\"right-tools\">\n    <div class=\"user-badge\">{{ user?.name?.charAt(0) || 'S' }}</div>\n  </div>\n</header>\n", styles: [".dashboard-topbar {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e8e2db;\n  \n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 20px;\n}\n\n.topbar-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.topbar-title {\n  color: #111827;\n  font-size: 1.65rem;\n  font-weight: 700;\n}\n\n.wave {\n  font-size: 1.3rem;\n  vertical-align: middle;\n}\n\n.topbar-subtitle {\n  color: #7c8798;\n  font-size: 0.92rem;\n}\n\n.topbar-tools {\n  align-items: center;\n  display: flex;\n  gap: 14px;\n}\n\n.search-box {\n  align-items: center;\n  background: #f4f1ec;\n  border-radius: 12px;\n  color: #98a2b3;\n  display: flex;\n  font-size: 0.92rem;\n  min-height: 44px;\n  min-width: 220px;\n  padding: 0 16px;\n}\n\n.user-badge {\n  align-items: center;\n  background: #5b5ce2;\n  border-radius: 999px;\n  color: #ffffff;\n  display: flex;\n  font-weight: 700;\n  height: 42px;\n  justify-content: center;\n  width: 42px;\n}\n\n@media (max-width: 900px) {\n  .dashboard-topbar {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  .topbar-title {\n    font-size: 1.3rem;\n  }\n\n  .topbar-tools {\n    width: 100%;\n  }\n\n  .search-box {\n    min-width: 0;\n    width: 100%;\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardNavComponent, { className: "DashboardNavComponent", filePath: "src/app/shared/components/navbar/nav.ts", lineNumber: 12 }); })();
