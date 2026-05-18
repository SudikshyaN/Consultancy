import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { DESTINATIONS } from '../../data/destinations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
function Journey_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const highlight_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    i0.ɵɵclassProp("active", $index_r2 === 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(highlight_r1);
} }
function Journey_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const step_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", step_r3.icon, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(step_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r3.subtitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", step_r3.tagColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", step_r3.tag, " ");
} }
function Journey_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No steps available");
    i0.ɵɵelementEnd();
} }
export class Journey {
    route;
    countryName = 'USA';
    countryOverview = '';
    highlights = [];
    steps = [];
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const slug = params.get('country') ?? 'usa';
            const destination = DESTINATIONS.find((item) => item.slug === slug) ?? DESTINATIONS[0];
            this.countryName = destination.name;
            this.countryOverview = destination.overview;
            this.highlights = destination.highlights;
            this.steps = destination.steps;
        });
    }
    static ɵfac = function Journey_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Journey)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Journey, selectors: [["app-journey"]], decls: 12, vars: 3, consts: [[1, "journey"], [1, "tabs"], [3, "active"], [1, "timeline"], [1, "step-card"], [1, "line"], [1, "icon"], [1, "content"], [1, "tag", 3, "ngClass"]], template: function Journey_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 1);
            i0.ɵɵrepeaterCreate(6, Journey_For_7_Template, 2, 3, "button", 2, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 3);
            i0.ɵɵrepeaterCreate(9, Journey_For_10_Template, 11, 5, "div", 4, i0.ɵɵrepeaterTrackByIndex, false, Journey_ForEmpty_11_Template, 2, 0, "p");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.countryName, " Study Plan");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.countryOverview, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.highlights);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.steps);
        } }, dependencies: [NgClass], styles: [".journey[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 960px;\n  margin: auto;\n  border-radius: var(--radius-xl);\n  background: rgba(255, 255, 255, 0.74);\n  border: 1px solid var(--color-line);\n  box-shadow: 0 18px 45px rgba(23, 32, 51, 0.08);\n}\n\n.journey[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 5px;\n  font-family: var(--font-heading);\n}\n\n.journey[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #777;\n  margin-bottom: 20px;\n  line-height: 1.7;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: #fff;\n  padding: 10px 16px;\n  border-radius: 20px;\n  cursor: default;\n}\n\n.tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #1e2a47;\n  color: #fff;\n}\n.timeline[_ngcontent-%COMP%] {\n  border-left: 3px solid #ddd;\n  padding-left: 20px;\n}\n\n.step-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  background: #fff;\n  padding: 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  border: 1px solid #eee;\n}\n.line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -23px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #ccc;\n}\n.icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 12px;\n  background: rgba(15, 118, 110, 0.1);\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-brand-strong);\n}\n.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--font-heading);\n}\n\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #888;\n}\n.tag[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n}\n.tag.yellow[_ngcontent-%COMP%] {\n  background: #f6e6a6;\n}\n\n.tag.blue[_ngcontent-%COMP%] {\n  background: #cfe8ff;\n}\n\n.tag.green[_ngcontent-%COMP%] {\n  background: #c9f2d6;\n}\n\n@media (max-width: 720px) {\n  .journey[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .step-card[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    align-items: flex-start;\n  }\n\n  .tag[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Journey, [{
        type: Component,
        args: [{ selector: 'app-journey', standalone: true, imports: [NgClass], template: "<div class=\"journey\">\n  <h1>{{ countryName }} Study Plan</h1>\n  <p>\n    {{ countryOverview }}\n  </p>\n\n  <div class=\"tabs\">\n    @for (highlight of highlights; track highlight) {\n      <button [class.active]=\"$index === 0\">{{ highlight }}</button>\n    }\n  </div>\n\n  <div class=\"timeline\">\n    @for (step of steps; track $index) {\n      <div class=\"step-card\">\n        <div class=\"line\"></div>\n\n        <div class=\"icon\">\n          {{ step.icon }}\n        </div>\n\n        <div class=\"content\">\n          <h3>{{ step.title }}</h3>\n          <p>{{ step.subtitle }}</p>\n        </div>\n\n        <div class=\"tag\" [ngClass]=\"step.tagColor\">\n          {{ step.tag }}\n        </div>\n      </div>\n    } @empty {\n      <p>No steps available</p>\n    }\n  </div>\n</div>\n", styles: [".journey {\n  padding: 2rem;\n  max-width: 960px;\n  margin: auto;\n  border-radius: var(--radius-xl);\n  background: rgba(255, 255, 255, 0.74);\n  border: 1px solid var(--color-line);\n  box-shadow: 0 18px 45px rgba(23, 32, 51, 0.08);\n}\n\n.journey h1 {\n  font-size: 32px;\n  margin-bottom: 5px;\n  font-family: var(--font-heading);\n}\n\n.journey > p {\n  color: #777;\n  margin-bottom: 20px;\n  line-height: 1.7;\n}\n\n.tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 30px;\n}\n\n.tabs button {\n  border: 1px solid #ddd;\n  background: #fff;\n  padding: 10px 16px;\n  border-radius: 20px;\n  cursor: default;\n}\n\n.tabs .active {\n  background: #1e2a47;\n  color: #fff;\n}\n.timeline {\n  border-left: 3px solid #ddd;\n  padding-left: 20px;\n}\n\n.step-card {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  background: #fff;\n  padding: 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  border: 1px solid #eee;\n}\n.line {\n  position: absolute;\n  left: -23px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #ccc;\n}\n.icon {\n  display: grid;\n  place-items: center;\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 12px;\n  background: rgba(15, 118, 110, 0.1);\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-brand-strong);\n}\n.content h3 {\n  margin: 0;\n  font-family: var(--font-heading);\n}\n\n.content p {\n  margin: 5px 0 0;\n  color: #888;\n}\n.tag {\n  margin-left: auto;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n}\n.tag.yellow {\n  background: #f6e6a6;\n}\n\n.tag.blue {\n  background: #cfe8ff;\n}\n\n.tag.green {\n  background: #c9f2d6;\n}\n\n@media (max-width: 720px) {\n  .journey {\n    padding: 1.25rem;\n  }\n\n  .step-card {\n    flex-wrap: wrap;\n    align-items: flex-start;\n  }\n\n  .tag {\n    margin-left: 0;\n  }\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Journey, { className: "Journey", filePath: "src/app/shared/components/journey/journey.ts", lineNumber: 14 }); })();
