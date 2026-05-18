import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../../core/components/site-header/site-header';
import { ConsultationCtaComponent } from '../../shared/components/consultation-cta/consultation-cta';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { ServicesGridComponent } from '../../shared/components/services-grid/services-grid';
import { ProcessStripComponent } from '../../shared/components/process-strip/process-strip';
import { FooterComponent } from '../../core/components/site-footer/footer';
import * as i0 from "@angular/core";
export class HomePageComponent {
    showAuthModal = false;
    openModal() {
        this.showAuthModal = true;
    }
    closeModal() {
        this.showAuthModal = false;
    }
    proofItems = [
        'University shortlisting with budget guidance',
        'SOP, visa, and interview preparation support',
        'Personal counselor from first call to final departure'
    ];
    highlights = [
        { value: '800+', label: 'students guided' },
        { value: '8', label: 'partner countries' },
        { value: '94%', label: 'visa success support rate' }
    ];
    static ɵfac = function HomePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomePageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 7, vars: 2, consts: [[3, "openAuth"], [1, "home-page"], [3, "proofItems", "highlights"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-site-header", 0);
            i0.ɵɵlistener("openAuth", function HomePageComponent_Template_app_site_header_openAuth_0_listener() { return ctx.openModal(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "main", 1);
            i0.ɵɵelement(2, "app-hero-section", 2)(3, "app-process-strip")(4, "app-services-grid")(5, "app-consultation-cta")(6, "app-footer");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("proofItems", ctx.proofItems)("highlights", ctx.highlights);
        } }, dependencies: [ConsultationCtaComponent,
            HeroSectionComponent,
            ProcessStripComponent,
            ServicesGridComponent,
            SiteHeaderComponent,
            FooterComponent], styles: [".home-page[_ngcontent-%COMP%] {\n  display: grid;\n \n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomePageComponent, [{
        type: Component,
        args: [{ selector: 'app-home-page', imports: [
                    ConsultationCtaComponent,
                    HeroSectionComponent,
                    ProcessStripComponent,
                    ServicesGridComponent,
                    SiteHeaderComponent,
                    FooterComponent,
                    // LoginComponent,
                ], template: "<app-site-header  (openAuth)=\"openModal()\" />\n\n<main class=\"home-page\">\n  <app-hero-section [proofItems]=\"proofItems\"\n      [highlights]=\"highlights\"></app-hero-section>\n  <app-process-strip />\n  <!-- <app-journey></app-journey> -->\n  <app-services-grid />\n  <app-consultation-cta />\n\n\n<app-footer />\n\n</main>\n", styles: [".home-page {\n  display: grid;\n \n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/pages/home-page/home-page.ts", lineNumber: 28 }); })();
