import { Component } from '@angular/core';
import { Layout } from '../layout/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class FreeToolsComponent {
    router;
    constructor(router) {
        this.router = router;
    }
    goToSOP() {
        this.router.navigate(['/sop-maker']);
    }
    static ɵfac = function FreeToolsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FreeToolsComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FreeToolsComponent, selectors: [["app-free-tools"]], decls: 49, vars: 0, consts: [[1, "steps-section"], [1, "steps-title"], [1, "steps-container"], [1, "step"], [1, "circle"], [1, "step", "highlight"], [1, "sop-section"], [1, "hero-text"], [1, "card-section"], [1, "sop-card"], ["src", "https://img.freepik.com/premium-vector/sop-standard-operating-procedure-vector-stock-illustration_100456-9765.jpg?semt=ais_hybrid&w=740&q=80", "alt", "SOP Image", 1, "card-image"], [1, "card-content"], [1, "cta-btn", 3, "click"]], template: function FreeToolsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-layout")(1, "section", 0)(2, "h2", 1);
            i0.ɵɵtext(3, "How to create SOPs in 4 steps?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "div", 4);
            i0.ɵɵtext(7, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h3");
            i0.ɵɵtext(9, "Describe the Process");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Enter your background, goals, and academic details.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 3)(13, "div", 4);
            i0.ɵɵtext(14, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "h3");
            i0.ɵɵtext(16, "Specify Requirements");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, "Add university, country, and program preferences.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 3)(20, "div", 4);
            i0.ɵɵtext(21, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "h3");
            i0.ɵɵtext(23, "Get Your SOP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵtext(25, "AI generates a professional and structured SOP draft.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 5)(27, "div", 4);
            i0.ɵɵtext(28, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "h3");
            i0.ɵɵtext(30, "Review & Improve");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p");
            i0.ɵɵtext(32, " Get feedback from AI and experienced students or counselors to refine your SOP. ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "section", 6)(34, "div", 7)(35, "h1");
            i0.ɵɵtext(36, "Empowering Your Academic Journey");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p");
            i0.ɵɵtext(38, " Tailored digital tools designed specifically for Nepali students aiming for global excellence. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 8)(40, "div", 9);
            i0.ɵɵelement(41, "img", 10);
            i0.ɵɵelementStart(42, "div", 11)(43, "h2");
            i0.ɵɵtext(44, "\u270D\uFE0F SOP Maker & Reviewer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "p");
            i0.ɵɵtext(46, " Craft a compelling Statement of Purpose that stands out to admissions committees. Our AI-driven tool provides structure guidance and human-expert review to ensure your story is heard. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "button", 12);
            i0.ɵɵlistener("click", function FreeToolsComponent_Template_button_click_47_listener() { return ctx.goToSOP(); });
            i0.ɵɵtext(48, " Get Started \u2192 ");
            i0.ɵɵelementEnd()()()()()();
        } }, dependencies: [Layout], styles: ["\n.sop-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #071426;\n  color: white;\n}\n\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 40px;\n  margin-bottom: 10px;\n}\n\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display:flex;\n  justify-content: center;\n  color: #9ca3af;\n  max-width: 500px;\n  margin-bottom: 40px;\n  margin-left:534px;\n}\n\n\n.card-section[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: center;\n}\n.sop-card[_ngcontent-%COMP%] {\n\n  background: linear-gradient(180deg, #0b1b2b, #071426);\n  border-radius: 24px;\n  overflow: hidden;\n  max-width: 420px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.5);\n  // margin-left: 574px;\n\n}\n\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 262px;\n  object-fit: cover;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n\n.cta-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n  padding: 14px;\n  border-radius: 30px;\n  border: none;\n  background: linear-gradient(to right, #4ade80, #22c55e);\n  color: black;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.cta-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n\n\n.steps-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #071426;\n  text-align: center;\n}\n\n.steps-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 50px;\n}\n\n.steps-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  flex-wrap: wrap;\n}\n\n.step[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background: linear-gradient(\n      to right,\n      #4ade80,\n      #22c55e);\n  color: black;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: bold;\n  margin: 0 auto 20px;\n}\n\n\n.highlight[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #4ade80, #22c55e);\n  color: black;\n}\n\n.highlight[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n\n\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n\n.bottom-cta[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding: 14px 30px;\n  border-radius: 30px;\n  border: none;\n  background: linear-gradient(to right, #4ade80, #22c55e);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.bottom-cta[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FreeToolsComponent, [{
        type: Component,
        args: [{ selector: 'app-free-tools', imports: [Layout], template: "<app-layout>\n<section class=\"steps-section\">\n\n  <h2 class=\"steps-title\">How to create SOPs in 4 steps?</h2>\n\n  <div class=\"steps-container\">\n\n    <div class=\"step\">\n      <div class=\"circle\">1</div>\n      <h3>Describe the Process</h3>\n      <p>Enter your background, goals, and academic details.</p>\n    </div>\n\n    <div class=\"step\">\n      <div class=\"circle\">2</div>\n      <h3>Specify Requirements</h3>\n      <p>Add university, country, and program preferences.</p>\n    </div>\n\n    <div class=\"step\">\n      <div class=\"circle\">3</div>\n      <h3>Get Your SOP</h3>\n      <p>AI generates a professional and structured SOP draft.</p>\n    </div>\n\n    <div class=\"step highlight\">\n      <div class=\"circle\">4</div>\n      <h3>Review & Improve</h3>\n      <p>\n        Get feedback from AI and experienced students or counselors to refine your SOP.\n      </p>\n    </div>\n\n  </div>\n\n \n \n\n</section>\n<section class=\"sop-section\">\n\n  <div class=\"hero-text\">\n    <h1>Empowering Your Academic Journey</h1>\n    <p>\n      Tailored digital tools designed specifically for Nepali students\n      aiming for global excellence.\n    </p>\n  </div>\n  <div class=\"card-section\">\n\n  <div class=\"sop-card\">\n\n    <img src= \"https://img.freepik.com/premium-vector/sop-standard-operating-procedure-vector-stock-illustration_100456-9765.jpg?semt=ais_hybrid&w=740&q=80\" alt=\"SOP Image\" class=\"card-image\" />\n\n    <div class=\"card-content\">\n      <h2>\u270D\uFE0F SOP Maker & Reviewer</h2>\n\n      <p>\n        Craft a compelling Statement of Purpose that stands out to admissions\n        committees. Our AI-driven tool provides structure guidance and\n        human-expert review to ensure your story is heard.\n      </p>\n\n      <button class=\"cta-btn\" (click)=\"goToSOP()\">\n        Get Started \u2192\n      </button>\n    </div>\n\n  </div>\n  </div>\n\n</section>\n</app-layout>", styles: ["/* HERO SECTION */\n.sop-section {\n  padding: 60px 20px;\n  background: #071426;\n  color: white;\n}\n\n.hero-text h1 {\n  display: flex;\n  justify-content: center;\n  font-size: 40px;\n  margin-bottom: 10px;\n}\n\n.hero-text p {\n  display:flex;\n  justify-content: center;\n  color: #9ca3af;\n  max-width: 500px;\n  margin-bottom: 40px;\n  margin-left:534px;\n}\n\n/* CARD */\n.card-section{\n  display: flex;\n  justify-content: center;\n}\n.sop-card {\n\n  background: linear-gradient(180deg, #0b1b2b, #071426);\n  border-radius: 24px;\n  overflow: hidden;\n  max-width: 420px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.5);\n  // margin-left: 574px;\n\n}\n\n.card-image {\n  width: 100%;\n  height: 262px;\n  object-fit: cover;\n}\n\n.card-content {\n  padding: 20px;\n}\n\n.card-content h2 {\n  font-size: 22px;\n}\n\n.card-content p {\n  color: #9ca3af;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n/* BUTTON */\n.cta-btn {\n  margin-top: 20px;\n  width: 100%;\n  padding: 14px;\n  border-radius: 30px;\n  border: none;\n  background: linear-gradient(to right, #4ade80, #22c55e);\n  color: black;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.cta-btn:hover {\n  transform: scale(1.05);\n}\n\n\n/* STEPS SECTION */\n.steps-section {\n  padding: 80px 20px;\n  background: #071426;\n  text-align: center;\n}\n\n.steps-title {\n  font-size: 32px;\n  margin-bottom: 50px;\n}\n\n.steps-container {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  flex-wrap: wrap;\n}\n\n.step {\n  max-width: 260px;\n}\n\n.circle {\n  width: 90px;\n  height: 90px;\n  background: linear-gradient(\n      to right,\n      #4ade80,\n      #22c55e);\n  color: black;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: bold;\n  margin: 0 auto 20px;\n}\n\n/* HIGHLIGHT STEP 4 */\n.highlight .circle {\n  background: linear-gradient(to right, #4ade80, #22c55e);\n  color: black;\n}\n\n.highlight h3 {\n  color: white;\n}\n\n/* TEXT */\n.step h3 {\n  font-size: 18px;\n}\n\n.step p {\n  color: #6b7280;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n/* CTA */\n.bottom-cta {\n  margin-top: 50px;\n  padding: 14px 30px;\n  border-radius: 30px;\n  border: none;\n  background: linear-gradient(to right, #4ade80, #22c55e);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.bottom-cta:hover {\n  transform: scale(1.05);\n}"] }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FreeToolsComponent, { className: "FreeToolsComponent", filePath: "src/app/pages/freetool/freetool.ts", lineNumber: 11 }); })();
