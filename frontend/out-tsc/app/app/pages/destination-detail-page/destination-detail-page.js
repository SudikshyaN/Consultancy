import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.step;
function DestinationDetailComponent_Conditional_0_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 13)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Step ", step_r1.step, ": ", step_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r1.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r1.duration);
} }
function DestinationDetailComponent_Conditional_0_For_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const doc_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(doc_r2);
} }
function DestinationDetailComponent_Conditional_0_For_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const tip_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tip_r3);
} }
function DestinationDetailComponent_Conditional_0_For_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4);
} }
function DestinationDetailComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 2)(2, "button", 3);
    i0.ɵɵtext(3, "\u2190 Choose destination");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "p", 7);
    i0.ɵɵtext(11, "STUDY IN");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(12, "h1");
    i0.ɵɵtext(13);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(14, "p", 8);
    i0.ɵɵtext(15);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(16, "div", 9)(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(23, "span");
    i0.ɵɵtext(24);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(25, "div", 10)(26, "div", 11)(27, "p");
    i0.ɵɵtext(28, "Average Tuition");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(29, "h2");
    i0.ɵɵtext(30);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(31, "div", 11)(32, "p");
    i0.ɵɵtext(33, "Visa Processing");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(34, "h2");
    i0.ɵɵtext(35);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(36, "div", 11)(37, "p");
    i0.ɵɵtext(38, "IELTS Requirement");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(39, "h2");
    i0.ɵɵtext(40);
    i0.ɵɵdomElementEnd()()()();
    i0.ɵɵdomElementStart(41, "div", 12)(42, "section")(43, "h2");
    i0.ɵɵtext(44, "Application Steps");
    i0.ɵɵdomElementEnd();
    i0.ɵɵrepeaterCreate(45, DestinationDetailComponent_Conditional_0_For_46_Template, 7, 4, "div", 13, _forTrack0);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(47, "section")(48, "h2");
    i0.ɵɵtext(49, "Required Documents");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(50, "ul");
    i0.ɵɵrepeaterCreate(51, DestinationDetailComponent_Conditional_0_For_52_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(53, "section")(54, "h2");
    i0.ɵɵtext(55, "Financial Requirement");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(56, "p");
    i0.ɵɵtext(57);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(58, "section")(59, "h2");
    i0.ɵɵtext(60, "Tips");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(61, "ul");
    i0.ɵɵrepeaterCreate(62, DestinationDetailComponent_Conditional_0_For_63_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(64, "section")(65, "h2");
    i0.ɵɵtext(66, "After Arrival");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(67, "ul");
    i0.ɵɵrepeaterCreate(68, DestinationDetailComponent_Conditional_0_For_69_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("/ ", ctx_r4.country.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.country.flag);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.country.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.country.overview);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.country.visaType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.country.universities || "Many universities");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.country.work || "Work opportunities");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.country.intakes);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r4.country.tuition || "$20,000+");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.country.processingTime);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.country.ielts || "6.0 - 7.0");
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r4.country.applicationSteps);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r4.country.documents);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r4.country.financialRequirement);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r4.country.tips);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r4.country.postArrival);
} }
function DestinationDetailComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 1)(1, "p");
    i0.ɵɵtext(2, "Loading destination details...");
    i0.ɵɵdomElementEnd()();
} }
export class DestinationDetailComponent {
    route;
    country;
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        const slug = this.route.snapshot.paramMap.get('slug');
        this.loadCountry(slug);
    }
    loadCountry(slug) {
        const data = {
            usa: {
                name: 'United States',
                flag: '🇺🇸',
                overview: 'Home to top-ranked universities and strong career opportunities.',
                visaType: 'F-1 Student Visa',
                processingTime: '3 - 8 weeks',
                visaFee: '$160',
                validity: 'Duration of study',
                tuition: '$29,000',
                ielts: '6.5 - 7.0',
                universities: '4500+ universities',
                work: 'OPT up to 3 years',
                intakes: 'Jan & Sept',
                applicationSteps: [
                    { step: 1, title: 'Choose University', description: 'Select universities', duration: '1-2 weeks' },
                    { step: 2, title: 'Prepare Documents', description: 'Gather SOP, IELTS', duration: '2-3 weeks' },
                    { step: 3, title: 'Apply', description: 'Submit applications', duration: '2 weeks' }
                ],
                documents: [
                    'Passport',
                    'Academic transcripts',
                    'IELTS/TOEFL',
                    'SOP',
                    'Financial proof'
                ],
                financialRequirement: 'Minimum $10,000 - $15,000 bank balance required.',
                tips: [
                    'Apply early',
                    'Prepare strong SOP',
                    'Choose realistic universities'
                ],
                postArrival: [
                    'Open bank account',
                    'Get SIM card',
                    'Register at university'
                ]
            },
            australia: {
                name: 'Australia',
                flag: '🇦🇺',
                overview: 'High quality education with work opportunities.',
                visaType: 'Subclass 500',
                processingTime: '4 - 6 weeks',
                visaFee: '$710',
                validity: 'Course duration',
                tuition: '$22,000',
                ielts: '6.0 - 6.5',
                universities: 'Top ranked universities',
                work: 'Work while studying',
                intakes: 'Feb & July',
                applicationSteps: [],
                documents: [],
                financialRequirement: '',
                tips: [],
                postArrival: []
            }
        };
        this.country = data[slug || 'usa'];
    }
    static ɵfac = function DestinationDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DestinationDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DestinationDetailComponent, selectors: [["app-destination-detail"]], decls: 2, vars: 1, consts: [[1, "detail-page"], [1, "loading"], [1, "top-bar"], ["routerLink", "/"], [1, "hero"], [1, "hero-left"], [1, "flag"], [1, "label"], [1, "overview"], [1, "tags"], [1, "hero-right"], [1, "info-card"], [1, "content"], [1, "card"]], template: function DestinationDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, DestinationDetailComponent_Conditional_0_Template, 70, 12, "div", 0)(1, DestinationDetailComponent_Conditional_1_Template, 3, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.country ? 0 : 1);
        } }, dependencies: [CommonModule], styles: [".detail-page[_ngcontent-%COMP%] {\n  color: white;\n  background: #0f172a;\n  min-height: 100vh;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #eee;\n  color: black;\n}\n\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 50px;\n  background: linear-gradient(135deg, #0f172a, #1e293b);\n}\n\n.hero-left[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n.flag[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: #22c55e;\n  letter-spacing: 2px;\n}\n\n.overview[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #cbd5f5;\n}\n\n.tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 5px;\n  padding: 8px 12px;\n  border: 1px solid #334155;\n  border-radius: 20px;\n  font-size: 12px;\n}\n\n.hero-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #1e293b;\n  padding: 15px;\n  margin: 10px 0;\n  border-radius: 10px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DestinationDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-destination-detail', standalone: true, imports: [CommonModule], template: "@if (country) {\n<div class=\"detail-page\">\n\n  <!-- TOP BAR -->\n  <div class=\"top-bar\">\n    <button routerLink=\"/\">\u2190 Choose destination</button>\n    <span>/ {{ country.name }}</span>\n  </div>\n\n  <!-- HERO SECTION -->\n  <div class=\"hero\">\n\n    <!-- LEFT CONTENT -->\n    <div class=\"hero-left\">\n      <div class=\"flag\">{{ country.flag }}</div>\n      <p class=\"label\">STUDY IN</p>\n      <h1>{{ country.name }}</h1>\n      <p class=\"overview\">{{ country.overview }}</p>\n\n      <div class=\"tags\">\n        <span>{{ country.visaType }}</span>\n        <span>{{ country.universities || 'Many universities' }}</span>\n        <span>{{ country.work || 'Work opportunities' }}</span>\n        <span>{{ country.intakes }}</span>\n      </div>\n    </div>\n\n    <!-- RIGHT CARDS -->\n    <div class=\"hero-right\">\n\n      <div class=\"info-card\">\n        <p>Average Tuition</p>\n        <h2>{{ country.tuition || '$20,000+' }}</h2>\n      </div>\n\n      <div class=\"info-card\">\n        <p>Visa Processing</p>\n        <h2>{{ country.processingTime }}</h2>\n      </div>\n\n      <div class=\"info-card\">\n        <p>IELTS Requirement</p>\n        <h2>{{ country.ielts || '6.0 - 7.0' }}</h2>\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- DETAILS SECTIONS -->\n  <div class=\"content\">\n\n    <!-- STEPS -->\n    <section>\n      <h2>Application Steps</h2>\n      @for (step of country.applicationSteps; track step.step) {\n        <div class=\"card\">\n          <h3>Step {{ step.step }}: {{ step.title }}</h3>\n          <p>{{ step.description }}</p>\n          <small>{{ step.duration }}</small>\n        </div>\n      }\n    </section>\n\n    <!-- DOCUMENTS -->\n    <section>\n      <h2>Required Documents</h2>\n      <ul>\n        @for (doc of country.documents; track doc) {\n          <li>{{ doc }}</li>\n        }\n      </ul>\n    </section>\n\n    <!-- FINANCE -->\n    <section>\n      <h2>Financial Requirement</h2>\n      <p>{{ country.financialRequirement }}</p>\n    </section>\n\n    <!-- TIPS -->\n    <section>\n      <h2>Tips</h2>\n      <ul>\n        @for (tip of country.tips; track tip) {\n          <li>{{ tip }}</li>\n        }\n      </ul>\n    </section>\n\n    <!-- AFTER ARRIVAL -->\n    <section>\n      <h2>After Arrival</h2>\n      <ul>\n        @for (item of country.postArrival; track item) {\n          <li>{{ item }}</li>\n        }\n      </ul>\n    </section>\n\n  </div>\n\n</div>\n} @else {\n<div class=\"loading\">\n  <p>Loading destination details...</p>\n</div>\n}", styles: [".detail-page {\n  color: white;\n  background: #0f172a;\n  min-height: 100vh;\n}\n\n.top-bar {\n  padding: 15px;\n  background: #eee;\n  color: black;\n}\n\n.hero {\n  display: flex;\n  justify-content: space-between;\n  padding: 50px;\n  background: linear-gradient(135deg, #0f172a, #1e293b);\n}\n\n.hero-left {\n  max-width: 50%;\n}\n\n.flag {\n  font-size: 40px;\n}\n\n.label {\n  color: #22c55e;\n  letter-spacing: 2px;\n}\n\n.overview {\n  margin-top: 15px;\n  color: #cbd5f5;\n}\n\n.tags span {\n  display: inline-block;\n  margin: 5px;\n  padding: 8px 12px;\n  border: 1px solid #334155;\n  border-radius: 20px;\n  font-size: 12px;\n}\n\n.hero-right {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.info-card {\n  background: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n}\n\n.content {\n  padding: 40px;\n}\n\n.card {\n  background: #1e293b;\n  padding: 15px;\n  margin: 10px 0;\n  border-radius: 10px;\n}\n\nul {\n  padding-left: 20px;\n}"] }]
    }], () => [{ type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DestinationDetailComponent, { className: "DestinationDetailComponent", filePath: "src/app/pages/destination-detail-page/destination-detail-page.ts", lineNumber: 12 }); })();
