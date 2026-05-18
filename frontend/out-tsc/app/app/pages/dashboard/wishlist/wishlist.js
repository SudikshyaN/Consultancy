import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class DashboardWishlistComponent {
    static ɵfac = function DashboardWishlistComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardWishlistComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardWishlistComponent, selectors: [["app-dashboard-wishlist"]], decls: 3, vars: 0, consts: [[1, "dashboard-card-content"]], template: function DashboardWishlistComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "h1");
            i0.ɵɵtext(2, "Wishlist");
            i0.ɵɵdomElementEnd()();
        } }, dependencies: [CommonModule], styles: [".dashboard-card-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardWishlistComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-wishlist', standalone: true, imports: [CommonModule], template: "<section class=\"dashboard-card-content\">\n  <h1>Wishlist</h1>\n</section>\n", styles: [".dashboard-card-content h1 {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardWishlistComponent, { className: "DashboardWishlistComponent", filePath: "src/app/pages/dashboard/wishlist/wishlist.ts", lineNumber: 11 }); })();
