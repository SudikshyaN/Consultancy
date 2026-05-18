import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications/applications';
import { PreferredCountriesComponent } from './preferred-countries/preferred-countries';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/dashboard.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.key;
function DashboardMainComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
} }
function DashboardMainComponent_For_12_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
} }
function DashboardMainComponent_For_12_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(step_r2.number);
} }
function DashboardMainComponent_For_12_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    const step_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("complete", step_r2.state === "complete");
} }
function DashboardMainComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10)(1, "span", 11);
    i0.ɵɵconditionalCreate(2, DashboardMainComponent_For_12_Conditional_2_Template, 2, 0, "span", 12)(3, DashboardMainComponent_For_12_Conditional_3_Template, 2, 1, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 14);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, DashboardMainComponent_For_12_Conditional_8_Template, 1, 2, "span", 15);
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ɵ$index_25_r3 = ctx.$index;
    const ɵ$count_25_r4 = ctx.$count;
    i0.ɵɵclassProp("complete", step_r2.state === "complete")("active", step_r2.state === "active")("upcoming", step_r2.state === "upcoming");
    i0.ɵɵproperty("routerLink", step_r2.route);
    i0.ɵɵattribute("aria-current", step_r2.state === "active" ? "step" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(step_r2.state === "complete" ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(step_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.meta);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(ɵ$index_25_r3 === ɵ$count_25_r4 - 1) ? 8 : -1);
} }
export class DashboardMainComponent {
    dashboardService;
    platformId = inject(PLATFORM_ID);
    isLoading = false;
    errorMessage = '';
    journey = {
        activeIndex: 0,
        steps: [
            {
                key: 'profile',
                label: 'Complete profile',
                route: '/dashboard/profile',
                complete: false,
                meta: '0% complete',
                number: 1,
                state: 'active',
            },
            {
                key: 'explore',
                label: 'Explore & save unis',
                route: '/dashboard/wishlist',
                complete: false,
                meta: '0 saved',
                number: 2,
                state: 'upcoming',
            },
            {
                key: 'apply',
                label: 'Apply',
                route: '/dashboard/main',
                complete: false,
                meta: '0 applications',
                number: 3,
                state: 'upcoming',
            },
            {
                key: 'visa',
                label: 'Visa & travel',
                route: '/dashboard/main',
                complete: false,
                meta: 'Unlocks after acceptance',
                number: 4,
                state: 'upcoming',
            },
        ],
    };
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.isLoading = true;
        this.dashboardService.getOverview().subscribe({
            next: (response) => {
                this.journey = response.journey;
                this.isLoading = false;
            },
            error: () => {
                this.errorMessage = 'Showing saved dashboard preview while live data is unavailable.';
                this.isLoading = false;
            },
        });
    }
    static ɵfac = function DashboardMainComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardMainComponent)(i0.ɵɵdirectiveInject(i1.DashboardService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardMainComponent, selectors: [["app-dashboard-main"]], decls: 18, vars: 3, consts: [[1, "dashboard-card-content"], ["class", "dashboard-error", 4, "ngIf"], [1, "journey-card"], [1, "journey-header"], ["aria-hidden", "true", 1, "journey-menu"], ["aria-label", "Application journey progress", 1, "journey-steps"], [1, "content-grid"], [1, "main-col"], [1, "side-col"], [1, "dashboard-error"], [1, "journey-step", 3, "routerLink"], [1, "step-marker"], ["aria-hidden", "true"], [1, "step-label"], [1, "step-meta"], ["aria-hidden", "true", 1, "step-connector", 3, "complete"], ["aria-hidden", "true", 1, "step-connector"]], template: function DashboardMainComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtemplate(1, DashboardMainComponent_p_1_Template, 2, 1, "p", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "h2");
            i0.ɵɵtext(5, "Your journey");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 4);
            i0.ɵɵelement(7, "span")(8, "span")(9, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵrepeaterCreate(11, DashboardMainComponent_For_12_Template, 9, 12, null, null, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 6)(14, "div", 7);
            i0.ɵɵelement(15, "app-applications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵelement(17, "app-preferred-countries");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("loading", ctx.isLoading);
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.journey.steps);
        } }, dependencies: [CommonModule, i2.NgIf, RouterModule, i3.RouterLink, ApplicationsComponent, PreferredCountriesComponent], styles: [".dashboard-card-content[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 76px);\n}\n\n.dashboard-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border-radius: 10px;\n  color: #991b1b;\n  margin: 0 0 16px;\n  padding: 12px 14px;\n}\n\n.journey-card[_ngcontent-%COMP%] {\n  background: #30302e;\n  border: 1px solid #55554f;\n  border-radius: 18px;\n  color: #efeee8;\n  padding: 34px 36px 38px;\n  position: relative;\n  box-shadow: 0 22px 50px rgba(12, 15, 18, 0.16);\n}\n\n//[_ngcontent-%COMP%]   .journey-card.loading[_ngcontent-%COMP%] {\n//   animation: _ngcontent-%COMP%_pulse 1.2s ease-in-out infinite;\n// }\n\n.journey-header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n\n.journey-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #d4d2cb;\n  font-size: 1.55rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.journey-menu[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #242421;\n  border-radius: 12px;\n  display: inline-flex;\n  gap: 4px;\n  height: 44px;\n  justify-content: center;\n  width: 52px;\n}\n\n.journey-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #c9c7bf;\n  border-radius: 999px;\n  height: 5px;\n  width: 5px;\n}\n\n.journey-steps[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: grid;\n  grid-template-columns: minmax(112px, 1fr) minmax(34px, 0.55fr) minmax(130px, 1fr) minmax(34px, 0.55fr) minmax(90px, 1fr) minmax(34px, 0.55fr) minmax(104px, 1fr);\n}\n\n.journey-step[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #d1cec6;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  min-width: 0;\n  text-align: center;\n  text-decoration: none;\n}\n\n.step-marker[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #242421;\n  border-radius: 999px;\n  color: #d6d3cc;\n  display: flex;\n  font-size: 1.35rem;\n  font-weight: 800;\n  height: 56px;\n  justify-content: center;\n  width: 56px;\n}\n\n.journey-step.complete[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%] {\n  background: #eef8df;\n  color: #3f7415;\n  font-size: 1.7rem;\n}\n\n.journey-step.active[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%] {\n  background: #62a018;\n  color: #ffffff;\n}\n\n.step-label[_ngcontent-%COMP%] {\n  color: #d6d3cc;\n  font-size: 1.25rem;\n  font-weight: 800;\n  line-height: 1.22;\n  max-width: 150px;\n}\n\n.journey-step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.step-meta[_ngcontent-%COMP%] {\n  color: #9f9c94;\n  font-size: 0.82rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.journey-step[_ngcontent-%COMP%]:hover   .step-label[_ngcontent-%COMP%], \n.journey-step[_ngcontent-%COMP%]:focus-visible   .step-label[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.journey-step[_ngcontent-%COMP%]:focus-visible {\n  border-radius: 10px;\n  outline: 3px solid rgba(154, 204, 83, 0.65);\n  outline-offset: 8px;\n}\n\n.step-connector[_ngcontent-%COMP%] {\n  background: #4e4e49;\n  display: block;\n  height: 4px;\n  margin-top: 26px;\n  min-width: 0;\n}\n\n.step-connector.complete[_ngcontent-%COMP%] {\n  background: #5f7f40;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.65;\n  }\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n  margin-top: 24px;\n}\n\n@media (max-width: 1100px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .journey-steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .journey-step[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: row;\n    text-align: left;\n  }\n\n  .step-label[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n\n  .step-meta[_ngcontent-%COMP%] {\n    margin-left: auto;\n    text-align: right;\n  }\n\n  .step-connector[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 640px) {\n  .journey-card[_ngcontent-%COMP%] {\n    border-radius: 14px;\n    padding: 24px 18px;\n  }\n\n  .journey-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .step-marker[_ngcontent-%COMP%] {\n    flex: 0 0 48px;\n    height: 48px;\n    width: 48px;\n  }\n\n  .journey-step[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    display: grid;\n    grid-template-columns: 48px 1fr;\n  }\n\n  .step-meta[_ngcontent-%COMP%] {\n    grid-column: 2;\n    margin-left: 0;\n    text-align: left;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardMainComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-main', standalone: true, imports: [CommonModule, RouterModule, ApplicationsComponent, PreferredCountriesComponent], template: "<section class=\"dashboard-card-content\">\n  <p *ngIf=\"errorMessage\" class=\"dashboard-error\">{{ errorMessage }}</p>\n\n  <div class=\"journey-card\" [class.loading]=\"isLoading\">\n    <div class=\"journey-header\">\n      <h2>Your journey</h2>\n      <span class=\"journey-menu\" aria-hidden=\"true\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </span>\n    </div>\n\n    <div class=\"journey-steps\" aria-label=\"Application journey progress\">\n      @for (step of journey.steps; track step.key; let last = $last) {\n        <a\n          class=\"journey-step\"\n          [class.complete]=\"step.state === 'complete'\"\n          [class.active]=\"step.state === 'active'\"\n          [class.upcoming]=\"step.state === 'upcoming'\"\n          [routerLink]=\"step.route\"\n          [attr.aria-current]=\"step.state === 'active' ? 'step' : null\"\n        >\n          <span class=\"step-marker\">\n            @if (step.state === 'complete') {\n              <span aria-hidden=\"true\">\u2713</span>\n            } @else {\n              <span>{{ step.number }}</span>\n            }\n          </span>\n          <span class=\"step-label\">{{ step.label }}</span>\n          <span class=\"step-meta\">{{ step.meta }}</span>\n        </a>\n\n        @if (!last) {\n          <span\n            class=\"step-connector\"\n            [class.complete]=\"step.state === 'complete'\"\n            aria-hidden=\"true\"\n          ></span>\n        }\n      }\n    </div>\n  </div>\n\n  <div class=\"content-grid\">\n    <div class=\"main-col\">\n      <app-applications></app-applications>\n    </div>\n    <div class=\"side-col\">\n      <app-preferred-countries></app-preferred-countries>\n    </div>\n  </div>\n</section>\n", styles: [".dashboard-card-content {\n  min-height: calc(100vh - 76px);\n}\n\n.dashboard-error {\n  background: #fee2e2;\n  border-radius: 10px;\n  color: #991b1b;\n  margin: 0 0 16px;\n  padding: 12px 14px;\n}\n\n.journey-card {\n  background: #30302e;\n  border: 1px solid #55554f;\n  border-radius: 18px;\n  color: #efeee8;\n  padding: 34px 36px 38px;\n  position: relative;\n  box-shadow: 0 22px 50px rgba(12, 15, 18, 0.16);\n}\n\n// .journey-card.loading {\n//   animation: pulse 1.2s ease-in-out infinite;\n// }\n\n.journey-header {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 28px;\n}\n\n.journey-header h2 {\n  color: #d4d2cb;\n  font-size: 1.55rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.journey-menu {\n  align-items: center;\n  background: #242421;\n  border-radius: 12px;\n  display: inline-flex;\n  gap: 4px;\n  height: 44px;\n  justify-content: center;\n  width: 52px;\n}\n\n.journey-menu span {\n  background: #c9c7bf;\n  border-radius: 999px;\n  height: 5px;\n  width: 5px;\n}\n\n.journey-steps {\n  align-items: flex-start;\n  display: grid;\n  grid-template-columns: minmax(112px, 1fr) minmax(34px, 0.55fr) minmax(130px, 1fr) minmax(34px, 0.55fr) minmax(90px, 1fr) minmax(34px, 0.55fr) minmax(104px, 1fr);\n}\n\n.journey-step {\n  align-items: center;\n  color: #d1cec6;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  min-width: 0;\n  text-align: center;\n  text-decoration: none;\n}\n\n.step-marker {\n  align-items: center;\n  background: #242421;\n  border-radius: 999px;\n  color: #d6d3cc;\n  display: flex;\n  font-size: 1.35rem;\n  font-weight: 800;\n  height: 56px;\n  justify-content: center;\n  width: 56px;\n}\n\n.journey-step.complete .step-marker {\n  background: #eef8df;\n  color: #3f7415;\n  font-size: 1.7rem;\n}\n\n.journey-step.active .step-marker {\n  background: #62a018;\n  color: #ffffff;\n}\n\n.step-label {\n  color: #d6d3cc;\n  font-size: 1.25rem;\n  font-weight: 800;\n  line-height: 1.22;\n  max-width: 150px;\n}\n\n.journey-step.active .step-label {\n  color: #ffffff;\n}\n\n.step-meta {\n  color: #9f9c94;\n  font-size: 0.82rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.journey-step:hover .step-label,\n.journey-step:focus-visible .step-label {\n  color: #ffffff;\n}\n\n.journey-step:focus-visible {\n  border-radius: 10px;\n  outline: 3px solid rgba(154, 204, 83, 0.65);\n  outline-offset: 8px;\n}\n\n.step-connector {\n  background: #4e4e49;\n  display: block;\n  height: 4px;\n  margin-top: 26px;\n  min-width: 0;\n}\n\n.step-connector.complete {\n  background: #5f7f40;\n}\n\n@keyframes pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.65;\n  }\n}\n\n.content-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n  margin-top: 24px;\n}\n\n@media (max-width: 1100px) {\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .journey-steps {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .journey-step {\n    align-items: center;\n    flex-direction: row;\n    text-align: left;\n  }\n\n  .step-label {\n    max-width: none;\n  }\n\n  .step-meta {\n    margin-left: auto;\n    text-align: right;\n  }\n\n  .step-connector {\n    display: none;\n  }\n}\n\n@media (max-width: 640px) {\n  .journey-card {\n    border-radius: 14px;\n    padding: 24px 18px;\n  }\n\n  .journey-header h2 {\n    font-size: 1.2rem;\n  }\n\n  .step-marker {\n    flex: 0 0 48px;\n    height: 48px;\n    width: 48px;\n  }\n\n  .journey-step {\n    align-items: flex-start;\n    display: grid;\n    grid-template-columns: 48px 1fr;\n  }\n\n  .step-meta {\n    grid-column: 2;\n    margin-left: 0;\n    text-align: left;\n  }\n}\n"] }]
    }], () => [{ type: i1.DashboardService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardMainComponent, { className: "DashboardMainComponent", filePath: "src/app/pages/dashboard/main/main.ts", lineNumber: 15 }); })();
