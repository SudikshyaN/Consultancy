import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.path;
function SiteHeaderComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function SiteHeaderComponent_For_12_Template_a_click_0_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.routes(item_r2.path)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r2.label, " ");
} }
export class SiteHeaderComponent {
    route = inject(Router);
    openAuth = new EventEmitter();
    navItems = [
        { label: 'Journey', path: '/#journey' },
        { label: 'freeTools', path: '/freetools' },
        { label: 'blog', path: '/blog' },
        { label: 'Finance', path: '/finance' },
        { label: 'About Us', path: '/about' },
        // { label: 'Login', path: '/login' },
    ];
    showAuthModal = false;
    openAuthModal() {
        this.showAuthModal = true;
    }
    closeAuthModal() {
        this.showAuthModal = false;
    }
    routes(path) {
        this.route.navigateByUrl(path);
    }
    triggerAuthModal() {
        this.openAuth.emit();
    }
    static ɵfac = function SiteHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SiteHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteHeaderComponent, selectors: [["app-site-header"]], outputs: { openAuth: "openAuth" }, decls: 16, vars: 0, consts: [[1, "site-header"], [1, "page-shell", "header-inner"], ["routerLink", "/", 1, "brand-mark"], [1, "brand-emblem"], [1, "brand-copy"], ["aria-label", "Primary", 1, "nav-links"], ["type", "", 1, "lang-toggle"], ["routerLink", "/login"], [3, "click"]], template: function SiteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
            i0.ɵɵtext(4, "BP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 4)(6, "strong");
            i0.ɵɵtext(7, "Bidesh Padhna");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "small");
            i0.ɵɵtext(9, "Foreign Education Consultancy");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "nav", 5);
            i0.ɵɵrepeaterCreate(11, SiteHeaderComponent_For_12_Template, 2, 1, "a", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 6)(14, "a", 7);
            i0.ɵɵtext(15, " Login/Signup ");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.navItems);
        } }, dependencies: [RouterLink], styles: [".site-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  padding: 1rem 0;\n  backdrop-filter: blur(18px);\n  background: #0b1d2a;\n  border-bottom: 1px solid rgba(23, 32, 51, 0.06);\n}\n\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n\n.brand-emblem[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: linear-gradient(135deg, var(--color-brand) 0%, #48a79e 100%);\n  color: white;\n  font-family: var(--font-heading);\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n\n.brand-copy[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.brand-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n}\n\n.brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  font-size: 0.8rem;\n}\n\n\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.header-cta[_ngcontent-%COMP%] {\n  padding: 0.7rem 1rem;\n  border-radius: 999px;\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\n//[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n//   background: var(--color-ink);\n//   color: white;\n// }\n\n//[_ngcontent-%COMP%]   .header-cta[_ngcontent-%COMP%] {\n//   background: var(--color-accent);\n//   color: white;\n//   box-shadow: 0 10px 25px rgba(221, 139, 40, 0.28);\n// }\n\n@media (max-width: 860px) {\n  .header-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .nav-links[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 560px) {\n  .header-cta[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n}\n\n.lang-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  padding: 4px 12px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  font-family: 'DM Sans', sans-serif;\n    margin-left: 46px;\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteHeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-site-header', imports: [RouterLink,], template: "<header class=\"site-header\">\n  <div class=\"page-shell header-inner\">\n    <a class=\"brand-mark\" routerLink=\"/\">\n      <span class=\"brand-emblem\">BP</span>\n      <span class=\"brand-copy\">\n        <strong>Bidesh Padhna</strong>\n        <small>Foreign Education Consultancy</small>\n      </span>\n    </a>\n\n\n    <nav class=\"nav-links\" aria-label=\"Primary\">\n      @for (item of navItems; track item.path) {\n      <a (click)=\"routes(item.path)\" >\n        {{ item.label }}\n      </a>\n      }\n    </nav>\n\n    <button type=\"\" class=\"lang-toggle\">\n      \n      <a routerLink=\"/login\">\n        Login/Signup </a>\n    </button>\n  </div>\n\n</header>", styles: [".site-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  padding: 1rem 0;\n  backdrop-filter: blur(18px);\n  background: #0b1d2a;\n  border-bottom: 1px solid rgba(23, 32, 51, 0.06);\n}\n\n.header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.brand-mark {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n\n.brand-emblem {\n  display: grid;\n  place-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: linear-gradient(135deg, var(--color-brand) 0%, #48a79e 100%);\n  color: white;\n  font-family: var(--font-heading);\n  font-weight: 800;\n  letter-spacing: 0.04em;\n}\n\n.brand-copy {\n  display: grid;\n}\n\n.brand-copy strong {\n  font-family: var(--font-heading);\n  font-size: 1rem;\n}\n\n.brand-copy small {\n  color: var(--color-ink-soft);\n  font-size: 0.8rem;\n}\n\n\n\n.nav-links a,\n.header-cta {\n  padding: 0.7rem 1rem;\n  border-radius: 999px;\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\n// .nav-links a.is-active {\n//   background: var(--color-ink);\n//   color: white;\n// }\n\n// .header-cta {\n//   background: var(--color-accent);\n//   color: white;\n//   box-shadow: 0 10px 25px rgba(221, 139, 40, 0.28);\n// }\n\n@media (max-width: 860px) {\n  .header-inner {\n    flex-wrap: wrap;\n  }\n\n  .nav-links {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 560px) {\n  .header-cta {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n}\n\n.lang-toggle {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  padding: 4px 12px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  font-family: 'DM Sans', sans-serif;\n    margin-left: 46px;\n\n}"] }]
    }], null, { openAuth: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SiteHeaderComponent, { className: "SiteHeaderComponent", filePath: "src/app/core/components/site-header/site-header.ts", lineNumber: 12 }); })();
