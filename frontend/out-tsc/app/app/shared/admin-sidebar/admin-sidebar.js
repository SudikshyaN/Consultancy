import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.path;
function AdminSidebarComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", item_r1.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.label, " ");
} }
export class AdminSidebarComponent {
    logoutClicked = new EventEmitter();
    items = [
        { label: 'Universities', path: '/admin/universities' },
    ];
    logout() {
        this.logoutClicked.emit();
    }
    static ɵfac = function AdminSidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminSidebarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminSidebarComponent, selectors: [["app-admin-sidebar"]], outputs: { logoutClicked: "logoutClicked" }, decls: 12, vars: 0, consts: [[1, "admin-sidebar"], [1, "admin-sidebar-brand"], ["aria-label", "Admin", 1, "admin-sidebar-nav"], [1, "admin-sidebar-menu"], ["type", "button", 1, "admin-logout-button", 3, "click"], ["routerLinkActive", "active", 1, "admin-sidebar-item", 3, "routerLink"]], template: function AdminSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "div", 1)(2, "strong");
            i0.ɵɵtext(3, "Bidesh Padhna");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Admin panel");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "nav", 2)(7, "ul", 3);
            i0.ɵɵrepeaterCreate(8, AdminSidebarComponent_For_9_Template, 3, 2, "li", null, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function AdminSidebarComponent_Template_button_click_10_listener() { return ctx.logout(); });
            i0.ɵɵtext(11, "Logout");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.items);
        } }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: [".admin-sidebar[_ngcontent-%COMP%] {\n  background: #30302e;\n  border-right: 1px solid #4a4a48;\n  bottom: 0;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  padding: 28px 20px 20px;\n  position: fixed;\n  top: 0;\n  width: 360px;\n}\n\n.admin-sidebar-brand[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #4a4a48;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: -28px -20px 20px;\n  padding: 38px 30px 24px;\n}\n\n.admin-sidebar-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.admin-sidebar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d8d3cc;\n  font-size: 1.05rem;\n}\n\n.admin-sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.admin-sidebar-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.admin-sidebar-item[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  color: #ece7de;\n  display: block;\n  font-size: 1.1rem;\n  margin-bottom: 10px;\n  padding: 16px 18px;\n}\n\n.admin-sidebar-item[_ngcontent-%COMP%]:hover, \n.admin-sidebar-item.active[_ngcontent-%COMP%] {\n  background: #252523;\n}\n\n.admin-logout-button[_ngcontent-%COMP%] {\n  border: 1px solid #3f3f3d;\n  border-radius: 16px;\n  color: #ece7de;\n  margin-top: auto;\n  padding: 16px 18px;\n  text-align: left;\n}\n\n.admin-logout-button[_ngcontent-%COMP%]:hover {\n  background: #252523;\n}\n\n@media (max-width: 900px) {\n  .admin-sidebar[_ngcontent-%COMP%] {\n    height: auto;\n    position: fixed;\n    width: 100%;\n    z-index: 20;\n  }\n\n  .admin-sidebar-nav[_ngcontent-%COMP%], \n   .admin-logout-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminSidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-sidebar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: "<aside class=\"admin-sidebar\">\n  <div class=\"admin-sidebar-brand\">\n    <strong>Bidesh Padhna</strong>\n    <span>Admin panel</span>\n  </div>\n\n  <nav class=\"admin-sidebar-nav\" aria-label=\"Admin\">\n    <ul class=\"admin-sidebar-menu\">\n      @for (item of items; track item.path) {\n        <li>\n          <a\n            [routerLink]=\"item.path\"\n            routerLinkActive=\"active\"\n            class=\"admin-sidebar-item\"\n          >\n            {{ item.label }}\n          </a>\n        </li>\n      }\n    </ul>\n  </nav>\n\n  <button type=\"button\" class=\"admin-logout-button\" (click)=\"logout()\">Logout</button>\n</aside>\n", styles: [".admin-sidebar {\n  background: #30302e;\n  border-right: 1px solid #4a4a48;\n  bottom: 0;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  padding: 28px 20px 20px;\n  position: fixed;\n  top: 0;\n  width: 360px;\n}\n\n.admin-sidebar-brand {\n  border-bottom: 1px solid #4a4a48;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: -28px -20px 20px;\n  padding: 38px 30px 24px;\n}\n\n.admin-sidebar-brand strong {\n  font-size: 2rem;\n}\n\n.admin-sidebar-brand span {\n  color: #d8d3cc;\n  font-size: 1.05rem;\n}\n\n.admin-sidebar-nav {\n  flex: 1;\n}\n\n.admin-sidebar-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.admin-sidebar-item {\n  border-radius: 16px;\n  color: #ece7de;\n  display: block;\n  font-size: 1.1rem;\n  margin-bottom: 10px;\n  padding: 16px 18px;\n}\n\n.admin-sidebar-item:hover,\n.admin-sidebar-item.active {\n  background: #252523;\n}\n\n.admin-logout-button {\n  border: 1px solid #3f3f3d;\n  border-radius: 16px;\n  color: #ece7de;\n  margin-top: auto;\n  padding: 16px 18px;\n  text-align: left;\n}\n\n.admin-logout-button:hover {\n  background: #252523;\n}\n\n@media (max-width: 900px) {\n  .admin-sidebar {\n    height: auto;\n    position: fixed;\n    width: 100%;\n    z-index: 20;\n  }\n\n  .admin-sidebar-nav,\n  .admin-logout-button {\n    display: none;\n  }\n}\n"] }]
    }], null, { logoutClicked: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminSidebarComponent, { className: "AdminSidebarComponent", filePath: "src/app/shared/admin-sidebar/admin-sidebar.ts", lineNumber: 12 }); })();
