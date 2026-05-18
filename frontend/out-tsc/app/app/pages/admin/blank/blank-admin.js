import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class BlankAdminPageComponent {
    static ɵfac = function BlankAdminPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BlankAdminPageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BlankAdminPageComponent, selectors: [["app-blank-admin-page"]], decls: 1, vars: 0, consts: [[1, "blank-admin-page"]], template: function BlankAdminPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElement(0, "section", 0);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlankAdminPageComponent, [{
        type: Component,
        args: [{ selector: 'app-blank-admin-page', standalone: true, imports: [CommonModule], template: "<section class=\"blank-admin-page\"></section>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BlankAdminPageComponent, { className: "BlankAdminPageComponent", filePath: "src/app/pages/admin/blank/blank-admin.ts", lineNumber: 11 }); })();
