import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DESTINATIONS } from '../../data/destinations';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/destinations", a0];
const _forTrack0 = ($index, $item) => $item.slug;
function ProcessStripComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.isActiveCountry(country_r1.slug));
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, country_r1.slug));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", country_r1.flag, i0.ɵɵsanitizeUrl)("alt", country_r1.name + " flag");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(country_r1.visa);
} }
export class ProcessStripComponent {
    router = inject(Router);
    countries = DESTINATIONS;
    isActiveCountry(slug) {
        return this.router.url.startsWith(`/destinations/${slug}`);
    }
    static ɵfac = function ProcessStripComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProcessStripComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProcessStripComponent, selectors: [["app-process-strip"]], decls: 13, vars: 0, consts: [["id", "journey", 1, "process", "page-shell"], [1, "process-intro"], [1, "section-label"], [1, "destination-container"], [1, "country-grid"], [1, "country-card", 3, "active", "routerLink"], [1, "country-card", 3, "routerLink"], [3, "src", "alt"]], template: function ProcessStripComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "section", 0)(2, "div", 1)(3, "span", 2);
            i0.ɵɵtext(4, "How it works");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 3)(6, "h1");
            i0.ɵɵtext(7, "Choose your destination");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Select a country to open a dedicated detail page with visa guidance, study flow, and planning notes.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 4);
            i0.ɵɵrepeaterCreate(11, ProcessStripComponent_For_12_Template, 6, 9, "a", 5, _forTrack0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.countries);
        } }, dependencies: [RouterLink], styles: [".process[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  padding: 1rem 0 3rem;\n}\n\n.process-intro[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  color: black;\n}\n\n.process-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: clamp(1.5rem, 3vw, 2.3rem);\n  width:100%;\n}\n\n.process-track[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.process-step[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  padding: 1.2rem;\n  border-radius: var(--radius-md);\n  background: linear-gradient(180deg, rgba(15, 118, 110, 0.08), rgba(255, 255, 255, 0.82));\n  border: 1px solid rgba(15, 118, 110, 0.14);\n}\n\n.process-step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  font-size: 0.84rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.process-step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: 1rem;\n}\n\n@media (max-width: 980px) {\n  .process-track[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 620px) {\n  .process-track[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n.destination-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  padding: 1.75rem;\n  border-radius: var(--radius-xl);\n  background: rgba(255, 255, 255, 0.68);\n  border: 1px solid var(--color-line);\n  box-shadow: 0 18px 45px rgba(23, 32, 51, 0.08);\n  color: black;\n}\n\n.destination-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n}\n\n.destination-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-ink-soft);\n}\n\n.country-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.country-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgba(23, 32, 51, 0.12);\n  border-radius: 16px;\n  padding: 20px;\n  cursor: pointer;\n  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;\n  background: linear-gradient(180deg, rgba(255, 247, 234, 0.9), rgba(255, 255, 255, 0.95));\n}\n\n.country-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: auto;\n  margin-bottom: 10px;\n}\n\n.country-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: black;\n}\n\n.country-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  font-size: 14px;\n}\n\n.country-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);\n}\n\n.country-card.active[_ngcontent-%COMP%] {\n  border-color: var(--color-brand);\n  background: rgba(15, 118, 110, 0.08);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProcessStripComponent, [{
        type: Component,
        args: [{ selector: 'app-process-strip', standalone: true, imports: [RouterLink], template: "    <section id=\"journey\" class=\"process page-shell\">\n\n<section id=\"journey\" class=\"process page-shell\">\n  <div class=\"process-intro\">\n    <span class=\"section-label\">How it works</span>\n    \n  </div>\n\n  <div class=\"destination-container\">\n    <h1>Choose your destination</h1>\n    <p>Select a country to open a dedicated detail page with visa guidance, study flow, and planning notes.</p>\n\n    <div class=\"country-grid\">\n      @for (country of countries; track country.slug) {\n        <a\n          class=\"country-card\"\n          [class.active]=\"isActiveCountry(country.slug)\"\n          [routerLink]=\"['/destinations', country.slug]\"\n        >\n          <img [src]=\"country.flag\" [alt]=\"country.name + ' flag'\" />\n          <h3>{{ country.name }}</h3>\n          <span>{{ country.visa }}</span>\n        </a>\n      }\n    </div>\n  </div >\n</section>\n</section>\n", styles: [".process {\n  display: grid;\n  gap: 1.25rem;\n  padding: 1rem 0 3rem;\n}\n\n.process-intro {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  color: black;\n}\n\n.process-intro h2 {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: clamp(1.5rem, 3vw, 2.3rem);\n  width:100%;\n}\n\n.process-track {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.process-step {\n  display: grid;\n  gap: 0.7rem;\n  padding: 1.2rem;\n  border-radius: var(--radius-md);\n  background: linear-gradient(180deg, rgba(15, 118, 110, 0.08), rgba(255, 255, 255, 0.82));\n  border: 1px solid rgba(15, 118, 110, 0.14);\n}\n\n.process-step span {\n  color: var(--color-brand);\n  font-size: 0.84rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.process-step h3 {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: 1rem;\n}\n\n@media (max-width: 980px) {\n  .process-track {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 620px) {\n  .process-track {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n.destination-container {\n  display: grid;\n  gap: 0.75rem;\n  padding: 1.75rem;\n  border-radius: var(--radius-xl);\n  background: rgba(255, 255, 255, 0.68);\n  border: 1px solid var(--color-line);\n  box-shadow: 0 18px 45px rgba(23, 32, 51, 0.08);\n  color: black;\n}\n\n.destination-container h1 {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n}\n\n.destination-container p {\n  margin: 0;\n  color: var(--color-ink-soft);\n}\n\n.country-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.country-card {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgba(23, 32, 51, 0.12);\n  border-radius: 16px;\n  padding: 20px;\n  cursor: pointer;\n  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;\n  background: linear-gradient(180deg, rgba(255, 247, 234, 0.9), rgba(255, 255, 255, 0.95));\n}\n\n.country-card img {\n  width: 36px;\n  height: auto;\n  margin-bottom: 10px;\n}\n\n.country-card h3 {\n  margin: 0;\n  color: black;\n}\n\n.country-card span {\n  color: var(--color-ink-soft);\n  font-size: 14px;\n}\n\n.country-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);\n}\n\n.country-card.active {\n  border-color: var(--color-brand);\n  background: rgba(15, 118, 110, 0.08);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProcessStripComponent, { className: "ProcessStripComponent", filePath: "src/app/shared/components/process-strip/process-strip.ts", lineNumber: 13 }); })();
