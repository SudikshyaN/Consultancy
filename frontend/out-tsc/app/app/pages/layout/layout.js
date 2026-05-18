import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../../core/components/site-header/site-header';
import { FooterComponent } from '../../core/components/site-footer/footer';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class Layout {
    showAuthModal = false;
    openModal() {
        this.showAuthModal = true;
    }
    closeModal() {
        this.showAuthModal = false;
    }
    static ɵfac = function Layout_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Layout)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Layout, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[3, "openAuth"]], template: function Layout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "app-site-header", 0);
            i0.ɵɵlistener("openAuth", function Layout_Template_app_site_header_openAuth_0_listener() { return ctx.openModal(); });
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(1);
            i0.ɵɵelement(2, "app-footer");
        } }, dependencies: [SiteHeaderComponent,
            FooterComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Layout, [{
        type: Component,
        args: [{ selector: 'app-layout', imports: [
                    SiteHeaderComponent,
                    FooterComponent,
                ], template: "<app-site-header  (openAuth)=\"openModal()\" />\n<ng-content></ng-content>\n\n<app-footer />\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Layout, { className: "Layout", filePath: "src/app/pages/layout/layout.ts", lineNumber: 16 }); })();
