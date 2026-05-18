import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../../../shared/admin-sidebar/admin-sidebar';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/auth.services";
import * as i2 from "@angular/router";
export class AdminShellComponent {
    authService;
    router;
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/admin/login']);
    }
    static ɵfac = function AdminShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminShellComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminShellComponent, selectors: [["app-admin-shell"]], decls: 4, vars: 0, consts: [[1, "admin-shell-page"], [3, "logoutClicked"], [1, "admin-shell-content"]], template: function AdminShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "app-admin-sidebar", 1);
            i0.ɵɵlistener("logoutClicked", function AdminShellComponent_Template_app_admin_sidebar_logoutClicked_1_listener() { return ctx.logout(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "main", 2);
            i0.ɵɵelement(3, "router-outlet");
            i0.ɵɵelementEnd()();
        } }, dependencies: [CommonModule, RouterOutlet, AdminSidebarComponent], styles: [".admin-shell-page[_ngcontent-%COMP%] {\n  background: #181818;\n  min-height: 100vh;\n}\n\n.admin-shell-content[_ngcontent-%COMP%] {\n  margin-left: 360px;\n  min-height: 100vh;\n}\n\n@media (max-width: 900px) {\n  .admin-shell-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-top: 96px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminShellComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-shell', standalone: true, imports: [CommonModule, RouterOutlet, AdminSidebarComponent], template: "<section class=\"admin-shell-page\">\n  <app-admin-sidebar (logoutClicked)=\"logout()\"></app-admin-sidebar>\n\n  <main class=\"admin-shell-content\">\n    <router-outlet></router-outlet>\n  </main>\n</section>\n", styles: [".admin-shell-page {\n  background: #181818;\n  min-height: 100vh;\n}\n\n.admin-shell-content {\n  margin-left: 360px;\n  min-height: 100vh;\n}\n\n@media (max-width: 900px) {\n  .admin-shell-content {\n    margin-left: 0;\n    padding-top: 96px;\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "src/app/pages/admin/admin-shell/admin-shell.ts", lineNumber: 14 }); })();
