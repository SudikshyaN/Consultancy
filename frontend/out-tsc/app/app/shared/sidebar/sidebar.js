import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.path;
function DashboardSidebarComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", item_r1.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.label, " ");
} }
export class DashboardSidebarComponent {
    logoutClicked = new EventEmitter();
    items = [
        { label: 'Main', path: '/dashboard/main' },
        { label: 'Profile', path: '/dashboard/profile' },
        { label: 'Wishlist', path: '/dashboard/wishlist' },
        { label: 'Community', path: '/dashboard/community' },
    ];
    logout() {
        this.logoutClicked.emit();
    }
    static ɵfac = function DashboardSidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardSidebarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardSidebarComponent, selectors: [["app-dashboard-sidebar"]], outputs: { logoutClicked: "logoutClicked" }, decls: 15, vars: 0, consts: [[1, "dashboard-sidebar"], [1, "sidebar-brand"], [1, "brand-mark"], [1, "brand-copy"], ["aria-label", "Dashboard", 1, "sidebar-nav"], [1, "sidebar-menu"], ["type", "button", 1, "logout-button", 3, "click"], ["routerLinkActive", "active", 1, "sidebar-item", 3, "routerLink"]], template: function DashboardSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3, "BP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "strong");
            i0.ɵɵtext(6, "Bidesh Padhna");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Foreign Education Consultancy");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "nav", 4)(10, "ul", 5);
            i0.ɵɵrepeaterCreate(11, DashboardSidebarComponent_For_12_Template, 3, 2, "li", null, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "button", 6);
            i0.ɵɵlistener("click", function DashboardSidebarComponent_Template_button_click_13_listener() { return ctx.logout(); });
            i0.ɵɵtext(14, "Logout");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.items);
        } }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: [".dashboard-sidebar[_ngcontent-%COMP%] {\n  background: #081f26;\n  border-radius: 24px 0 0 24px;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 28px);\n  padding: 20px 16px;\n  width: 240px;\n}\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  gap: 12px;\n  margin: -4px -16px 20px;\n  padding: 8px 16px 20px;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  align-items: center;\n  background: linear-gradient(135deg, #3ddad7, #2a9d8f);\n  border-radius: 12px;\n  color: #ffffff;\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  height: 46px;\n  justify-content: center;\n  width: 46px;\n}\n\n.brand-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 17px;\n}\n\n.brand-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8da3a9;\n  font-size: 12px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.sidebar-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar-item[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #cbd5e1;\n  cursor: pointer;\n  display: block;\n  margin-bottom: 8px;\n  padding: 12px 16px;\n  transition: background 0.2s ease;\n}\n\n.sidebar-item[_ngcontent-%COMP%]:hover {\n  background: #12353f;\n}\n\n.sidebar-item.active[_ngcontent-%COMP%] {\n  background: #1d4ed8;\n  color: #ffffff;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #cbd5e1;\n  cursor: pointer;\n  margin-top: auto;\n  padding: 12px 16px;\n  text-align: left;\n}\n\n.logout-button[_ngcontent-%COMP%]:hover {\n  background: #12353f;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardSidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-sidebar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: "<aside class=\"dashboard-sidebar\">\n  <div class=\"sidebar-brand\">\n    <div class=\"brand-mark\">BP</div>\n    <div class=\"brand-copy\">\n      <strong>Bidesh Padhna</strong>\n      <span>Foreign Education Consultancy</span>\n    </div>\n  </div>\n\n  <nav class=\"sidebar-nav\" aria-label=\"Dashboard\">\n    <ul class=\"sidebar-menu\">\n      @for (item of items; track item.path) {\n        <li>\n          <a\n            [routerLink]=\"item.path\"\n            routerLinkActive=\"active\"\n            class=\"sidebar-item\"\n          >\n            {{ item.label }}\n          </a>\n        </li>\n      }\n    </ul>\n  </nav>\n\n  <button type=\"button\" class=\"logout-button\" (click)=\"logout()\">Logout</button>\n</aside>\n", styles: [".dashboard-sidebar {\n  background: #081f26;\n  border-radius: 24px 0 0 24px;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 28px);\n  padding: 20px 16px;\n  width: 240px;\n}\n\n.sidebar-brand {\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  gap: 12px;\n  margin: -4px -16px 20px;\n  padding: 8px 16px 20px;\n}\n\n.brand-mark {\n  align-items: center;\n  background: linear-gradient(135deg, #3ddad7, #2a9d8f);\n  border-radius: 12px;\n  color: #ffffff;\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  height: 46px;\n  justify-content: center;\n  width: 46px;\n}\n\n.brand-copy {\n  display: flex;\n  flex-direction: column;\n}\n\n.brand-copy strong {\n  color: #ffffff;\n  font-size: 17px;\n}\n\n.brand-copy span {\n  color: #8da3a9;\n  font-size: 12px;\n}\n\n.sidebar-nav {\n  flex: 1;\n}\n\n.sidebar-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar-item {\n  border-radius: 10px;\n  color: #cbd5e1;\n  cursor: pointer;\n  display: block;\n  margin-bottom: 8px;\n  padding: 12px 16px;\n  transition: background 0.2s ease;\n}\n\n.sidebar-item:hover {\n  background: #12353f;\n}\n\n.sidebar-item.active {\n  background: #1d4ed8;\n  color: #ffffff;\n}\n\n.logout-button {\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #cbd5e1;\n  cursor: pointer;\n  margin-top: auto;\n  padding: 12px 16px;\n  text-align: left;\n}\n\n.logout-button:hover {\n  background: #12353f;\n}\n"] }]
    }], null, { logoutClicked: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardSidebarComponent, { className: "DashboardSidebarComponent", filePath: "src/app/shared/sidebar/sidebar.ts", lineNumber: 12 }); })();
