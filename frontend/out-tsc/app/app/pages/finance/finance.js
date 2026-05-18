import { Component } from '@angular/core';
import { Layout } from '../layout/layout';
import * as i0 from "@angular/core";
function FinanceComponent_Conditional_9_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function FinanceComponent_Conditional_9_For_2_Template_div_click_0_listener($event) { const country_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectCountry(country_r2, $event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", country_r2, " ");
} }
function FinanceComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, FinanceComponent_Conditional_9_For_2_Template, 2, 1, "div", 10, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.countries);
} }
export class FinanceComponent {
    isDropdownOpen = false;
    countries = ['Australia', 'USA', 'UK', 'Germany'];
    selectedCountry = 'Australia';
    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    selectCountry(country, event) {
        event.stopPropagation();
        this.selectedCountry = country;
        this.isDropdownOpen = false;
    }
    static ɵfac = function FinanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FinanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FinanceComponent, selectors: [["app-finance"]], decls: 30, vars: 2, consts: [[1, "container"], [1, "field"], [1, "dropdown", 3, "click"], [1, "arrow"], [1, "dropdown-menu"], [1, "input-box"], [1, "card"], [1, "title"], [1, "cost-breakdown"], [1, "box"], [1, "option"], [1, "option", 3, "click"]], template: function FinanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-layout")(1, "div", 0)(2, "div", 1)(3, "label");
            i0.ɵɵtext(4, "Preferred Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 2);
            i0.ɵɵlistener("click", function FinanceComponent_Template_div_click_5_listener() { return ctx.toggleDropdown(); });
            i0.ɵɵtext(6);
            i0.ɵɵelementStart(7, "span", 3);
            i0.ɵɵtext(8, "\u25BC");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(9, FinanceComponent_Conditional_9_Template, 3, 0, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 1)(11, "label");
            i0.ɵɵtext(12, "City");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 5);
            i0.ɵɵtext(14, "Melbourne");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 1)(16, "label");
            i0.ɵɵtext(17, "University");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 5);
            i0.ɵɵtext(19, "Monash University");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 6)(21, "p", 7);
            i0.ɵɵtext(22, "Estimated Yearly Total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 8)(24, "div", 9)(25, "p");
            i0.ɵɵtext(26, "Tuition Fee");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 9)(28, "p");
            i0.ɵɵtext(29, "Living Expenses");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.selectedCountry, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.isDropdownOpen ? 9 : -1);
        } }, dependencies: [Layout], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n}\n\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n\n  label {\n    font-size: 12px;\n    color: gray;\n    display: block;\n    margin-bottom: 5px;\n  }\n}\n\n.dropdown[_ngcontent-%COMP%], .input-box[_ngcontent-%COMP%] {\n  background: #0f766e;\n  padding: 14px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background: #0f766e;\n  color:white;\n  border-radius: 10px;\n  margin-top: 5px;\n  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);\n\n  .option {\n    padding: 12px;\n    cursor: pointer;\n\n    &:hover {\n      background: black;\n    }\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #0f766e;\n  color: white;\n  padding: 20px;\n  border-radius: 20px;\n\n  .title {\n    text-transform: uppercase;\n    font-size: 12px;\n    opacity: 0.8;\n  }\n\n  h1 {\n    margin: 10px 0;\n\n    span {\n      font-size: 16px;\n    }\n  }\n\n  .cost-breakdown {\n    display: flex;\n    gap: 10px;\n\n    .box {\n      background: rgba(255,255,255,0.15);\n      padding: 10px;\n      border-radius: 10px;\n      flex: 1;\n\n      p {\n        font-size: 12px;\n      }\n    }\n  }\n\n  .tip {\n    margin-top: 15px;\n    font-size: 12px;\n    opacity: 0.9;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FinanceComponent, [{
        type: Component,
        args: [{ selector: 'app-finance', imports: [Layout], template: "<app-layout>\n\n    <div class=\"container\">\n\n        <div class=\"field\">\n            <label>Preferred Country</label>\n            <div class=\"dropdown\" (click)=\"toggleDropdown()\">\n                {{ selectedCountry }}\n                <span class=\"arrow\">\u25BC</span>\n            </div>\n            @if (isDropdownOpen){\n            <div class=\"dropdown-menu\">\n                @for (country of countries; track $index) {\n                <div class=\"option\" (click)=\"selectCountry(country, $event)\">\n                    {{ country }}\n                </div>}\n            </div>\n            }\n        </div>\n\n        <div class=\"field\">\n            <label>City</label>\n            <div class=\"input-box\">Melbourne</div>\n        </div>\n\n        <div class=\"field\">\n            <label>University</label>\n            <div class=\"input-box\">Monash University</div>\n        </div>\n\n        <div class=\"card\">\n            <p class=\"title\">Estimated Yearly Total</p>\n            <!-- <h1>$34,850 <span>AUD</span></h1> -->\n\n            <div class=\"cost-breakdown\">\n                <div class=\"box\">\n                    <p>Tuition Fee</p>\n                    <!-- <h3>$22,000</h3> -->\n                </div>\n                <div class=\"box\">\n                    <p>Living Expenses</p>\n                    <!-- <h3>$12,850</h3> -->\n                </div>\n            </div>\n\n            <!-- <div class=\"tip\">\n                \uD83D\uDCA1 Tip: Saving 10% on rent covers your transport.\n            </div> -->\n        </div>\n\n    </div>\n</app-layout>", styles: [".container {\n  max-width: 700px;\n  margin: auto;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n}\n\n.field {\n  margin-bottom: 20px;\n\n  label {\n    font-size: 12px;\n    color: gray;\n    display: block;\n    margin-bottom: 5px;\n  }\n}\n\n.dropdown, .input-box {\n  background: #0f766e;\n  padding: 14px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\n.arrow {\n  font-size: 12px;\n}\n\n.dropdown-menu {\n  background: #0f766e;\n  color:white;\n  border-radius: 10px;\n  margin-top: 5px;\n  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);\n\n  .option {\n    padding: 12px;\n    cursor: pointer;\n\n    &:hover {\n      background: black;\n    }\n  }\n}\n\n.card {\n  background: #0f766e;\n  color: white;\n  padding: 20px;\n  border-radius: 20px;\n\n  .title {\n    text-transform: uppercase;\n    font-size: 12px;\n    opacity: 0.8;\n  }\n\n  h1 {\n    margin: 10px 0;\n\n    span {\n      font-size: 16px;\n    }\n  }\n\n  .cost-breakdown {\n    display: flex;\n    gap: 10px;\n\n    .box {\n      background: rgba(255,255,255,0.15);\n      padding: 10px;\n      border-radius: 10px;\n      flex: 1;\n\n      p {\n        font-size: 12px;\n      }\n    }\n  }\n\n  .tip {\n    margin-top: 15px;\n    font-size: 12px;\n    opacity: 0.9;\n  }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FinanceComponent, { className: "FinanceComponent", filePath: "src/app/pages/finance/finance.ts", lineNumber: 9 }); })();
