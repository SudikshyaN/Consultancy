import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function HeroSectionComponent_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1);
} }
function HeroSectionComponent_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 12)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
} }
export class HeroSectionComponent {
    proofItems = [];
    highlights = [];
    static ɵfac = function HeroSectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HeroSectionComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeroSectionComponent, selectors: [["app-hero-section"]], hostAttrs: [1, "app-hero-section"], inputs: { proofItems: "proofItems", highlights: "highlights" }, decls: 26, vars: 0, consts: [[1, "app-hero-section-bg"], [1, "hero", "page-shell"], [1, "hero-copy"], [1, "section-label"], [1, "hero-titles"], [1, "section-copy"], [1, "button-row"], ["href", "#consultation", 1, "button-primary"], [1, "proof-list"], [1, "hero-panel"], [1, "hero-card", "hero-card-primary"], [1, "hero-grid"], [1, "hero-card", "hero-card-stat"]], template: function HeroSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Global futures, planned with clarity");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "h1", 4);
            i0.ɵɵtext(6, "Study abroad with a consultancy that feels strategic, calm, and personal.");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "p", 5);
            i0.ɵɵtext(8, " We help students and families move from confusion to a confident plan with country selection, applications, scholarships, documentation, and visa guidance under one roof. ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(9, "div", 6)(10, "a", 7);
            i0.ɵɵtext(11, "Start your plan");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(12, "ul", 8);
            i0.ɵɵrepeaterCreate(13, HeroSectionComponent_For_14_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(15, "div", 9)(16, "div", 10)(17, "p");
            i0.ɵɵtext(18, "Student roadmap");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(19, "strong");
            i0.ɵɵtext(20, "March intake to visa filing in 14 guided steps");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(21, "span");
            i0.ɵɵtext(22, "Built for Nepalese students aiming for affordable and high-quality education abroad.");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(23, "div", 11);
            i0.ɵɵrepeaterCreate(24, HeroSectionComponent_For_25_Template, 5, 2, "article", 12, _forTrack0);
            i0.ɵɵdomElementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(13);
            i0.ɵɵrepeater(ctx.proofItems);
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.highlights);
        } }, styles: [".hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.9fr);\n  gap: 2rem;\n  padding: 4.5rem 0 3rem;\n  align-items: center;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.proof-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.85rem;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.proof-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  color: var(--color-ink-soft);\n}\n\n.proof-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--color-brand), var(--color-accent));\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: var(--radius-xl);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(250, 241, 224, 0.92));\n  box-shadow: var(--shadow-soft);\n  overflow: hidden;\n}\n\n.hero-panel[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: -15% auto auto 60%;\n  width: 14rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: rgba(15, 118, 110, 0.1);\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  padding: 1.4rem;\n}\n\n.hero-card-primary[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n  background: #172033;\n  color: white;\n}\n\n.hero-card-primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.hero-card-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.hero-card-primary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.hero-card-primary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  line-height: 1.15;\n}\n\n.hero-card-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.7;\n}\n\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.hero-card-stat[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.72);\n  color: black;\n  border: 1px solid rgba(23, 32, 51, 0.08);\n}\n\n.hero-card-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n}\n\n.hero-card-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  line-height: 1.5;\n}\n\n@media (max-width: 920px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-top: 3rem;\n  }\n}\n\n@media (max-width: 620px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.app-hero-section-bg[_ngcontent-%COMP%]{\n  background: #1a2744;\n}\n.hero-titles[_ngcontent-%COMP%] {\n  color:white;\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 4vw, 3.8rem);\n  line-height: 0.98;\n  letter-spacing: -0.04em;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeroSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-hero-section', host: { class: 'app-hero-section' }, template: "\n<div class=\"app-hero-section-bg\">\n  <section class=\"hero page-shell\">\n  <div class=\"hero-copy\">\n    <span class=\"section-label\">Global futures, planned with clarity</span>\n    <h1 class=\"hero-titles\">Study abroad with a consultancy that feels strategic, calm, and personal.</h1>\n    <p class=\"section-copy\">\n      We help students and families move from confusion to a confident plan with country selection,\n      applications, scholarships, documentation, and visa guidance under one roof.\n    </p>\n\n    <div class=\"button-row\">\n      <a class=\"button-primary\" href=\"#consultation\">Start your plan</a>\n    \n    </div>\n\n    <ul class=\"proof-list\">\n      @for (item of proofItems; track item) {\n        <li>{{ item }}</li>\n      }\n    </ul>\n  </div>\n\n  <div class=\"hero-panel\">\n    <div class=\"hero-card hero-card-primary\">\n      <p>Student roadmap</p>\n      <strong>March intake to visa filing in 14 guided steps</strong>\n      <span>Built for Nepalese students aiming for affordable and high-quality education abroad.</span>\n    </div>\n\n    <div class=\"hero-grid\">\n      @for (item of highlights; track item.label) {\n        <article class=\"hero-card hero-card-stat\">\n          <strong>{{ item.value }}</strong>\n          <span>{{ item.label }}</span>\n        </article>\n      }\n    </div>\n  </div>\n</section>\n</div>", styles: [".hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.9fr);\n  gap: 2rem;\n  padding: 4.5rem 0 3rem;\n  align-items: center;\n}\n\n.hero-copy {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.proof-list {\n  display: grid;\n  gap: 0.85rem;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.proof-list li {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  color: var(--color-ink-soft);\n}\n\n.proof-list li::before {\n  content: \"\";\n  width: 0.7rem;\n  height: 0.7rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--color-brand), var(--color-accent));\n}\n\n.hero-panel {\n  position: relative;\n  display: grid;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: var(--radius-xl);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(250, 241, 224, 0.92));\n  box-shadow: var(--shadow-soft);\n  overflow: hidden;\n}\n\n.hero-panel::before {\n  content: \"\";\n  position: absolute;\n  inset: -15% auto auto 60%;\n  width: 14rem;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: rgba(15, 118, 110, 0.1);\n}\n\n.hero-card {\n  position: relative;\n  border-radius: var(--radius-lg);\n  padding: 1.4rem;\n}\n\n.hero-card-primary {\n  display: grid;\n  gap: 0.7rem;\n  background: #172033;\n  color: white;\n}\n\n.hero-card-primary p,\n.hero-card-primary span {\n  margin: 0;\n}\n\n.hero-card-primary p {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.hero-card-primary strong {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  line-height: 1.15;\n}\n\n.hero-card-primary span {\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.7;\n}\n\n.hero-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.hero-card-stat {\n  background: rgba(255, 255, 255, 0.72);\n  color: black;\n  border: 1px solid rgba(23, 32, 51, 0.08);\n}\n\n.hero-card-stat strong {\n  display: block;\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n}\n\n.hero-card-stat span {\n  color: var(--color-ink-soft);\n  line-height: 1.5;\n}\n\n@media (max-width: 920px) {\n  .hero {\n    grid-template-columns: 1fr;\n    padding-top: 3rem;\n  }\n}\n\n@media (max-width: 620px) {\n  .hero-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.app-hero-section-bg{\n  background: #1a2744;\n}\n.hero-titles {\n  color:white;\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: clamp(2rem, 4vw, 3.8rem);\n  line-height: 0.98;\n  letter-spacing: -0.04em;\n}\n"] }]
    }], null, { proofItems: [{
            type: Input
        }], highlights: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HeroSectionComponent, { className: "HeroSectionComponent", filePath: "src/app/shared/components/hero-section/hero-section.ts", lineNumber: 10 }); })();
