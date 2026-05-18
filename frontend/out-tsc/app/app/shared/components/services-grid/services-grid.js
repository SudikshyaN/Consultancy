import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
function ServicesGridComponent_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const service_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("0", $index_r2 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r1.description);
} }
export class ServicesGridComponent {
    services = [
        {
            title: 'Profile Evaluation',
            description: 'We review academics, budget, work plans, and long-term goals before recommending countries or institutions.'
        },
        {
            title: 'Application Support',
            description: 'Shortlisting, document review, SOP polishing, and deadline tracking are handled through one guided workflow.'
        },
        {
            title: 'Scholarship Strategy',
            description: 'We identify value-focused programs and scholarship opportunities that fit both profile strength and affordability.'
        },
        {
            title: 'Visa Preparation',
            description: 'Mock interviews, financial document guidance, and checklist reviews help students file with more confidence.'
        }
    ];
    static ɵfac = function ServicesGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ServicesGridComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ServicesGridComponent, selectors: [["app-services-grid"]], decls: 11, vars: 0, consts: [["id", "consultation", 1, "services", "page-shell"], [1, "section-heading"], [1, "section-label"], [1, "section-title"], [1, "section-copy"], [1, "service-grid"], [1, "service-card"], [1, "service-number"]], template: function ServicesGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3, "What we do");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "h2", 3);
            i0.ɵɵtext(5, "Helping you choose the right path to study abroad with confidence.");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "p", 4);
            i0.ɵɵtext(7, " We simplify your journey by guiding you through country selection, visa processes, and university options\u2014so you can focus on your future, not the confusion. ");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "div", 5);
            i0.ɵɵrepeaterCreate(9, ServicesGridComponent_For_10_Template, 7, 3, "article", 6, _forTrack0);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.services);
        } }, styles: ["#consultation[_ngcontent-%COMP%] {\n  scroll-margin-top: 100px;\n}\n.services[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.75rem;\n  padding: 3rem 0;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  max-width: 52rem;\n}\n\n.service-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1.4rem;\n  border-radius: var(--radius-lg);\n  background:black;\n  border: 1px solid var(--color-line);\n  box-shadow: 0 18px 45px rgba(23, 32, 51, 0.08);\n}\n\n.service-number[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n}\n\n.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-ink-soft);\n  line-height: 1.75;\n}\n\n@media (max-width: 980px) {\n  .service-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 620px) {\n  .service-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServicesGridComponent, [{
        type: Component,
        args: [{ selector: 'app-services-grid', template: "<section class=\"services page-shell\" id=\"consultation\">\n  <div class=\"section-heading\">\n    <span class=\"section-label\">What we do</span>\n    <h2 class=\"section-title\">Helping you choose the right path to study abroad with confidence.</h2>\n    <p class=\"section-copy\">\n      We simplify your journey by guiding you through country selection, visa processes, and university options\u2014so you can focus on your future, not the confusion.\n    </p>\n  </div>\n\n  <div class=\"service-grid\">\n    @for (service of services; track service.title) {\n      <article class=\"service-card\">\n        <span class=\"service-number\">0{{ $index + 1 }}</span>\n        <h3>{{ service.title }}</h3>\n        <p>{{ service.description }}</p>\n      </article>\n    }\n  </div>\n</section>\n", styles: ["#consultation {\n  scroll-margin-top: 100px;\n}\n.services {\n  display: grid;\n  gap: 1.75rem;\n  padding: 3rem 0;\n}\n\n.section-heading {\n  display: grid;\n  gap: 1rem;\n  max-width: 52rem;\n}\n\n.service-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.service-card {\n  display: grid;\n  gap: 1rem;\n  padding: 1.4rem;\n  border-radius: var(--radius-lg);\n  background:black;\n  border: 1px solid var(--color-line);\n  box-shadow: 0 18px 45px rgba(23, 32, 51, 0.08);\n}\n\n.service-number {\n  color: var(--color-accent);\n  font-family: var(--font-heading);\n  font-size: 0.9rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.service-card h3 {\n  margin: 0;\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n}\n\n.service-card p {\n  margin: 0;\n  color: var(--color-ink-soft);\n  line-height: 1.75;\n}\n\n@media (max-width: 980px) {\n  .service-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 620px) {\n  .service-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ServicesGridComponent, { className: "ServicesGridComponent", filePath: "src/app/shared/components/services-grid/services-grid.ts", lineNumber: 9 }); })();
