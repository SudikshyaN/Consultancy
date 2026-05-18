import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _forTrack0 = ($index, $item) => $item.title;
function DashboardFreeToolsComponent_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "article", 4)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "button", 5);
    i0.ɵɵdomListener("click", function DashboardFreeToolsComponent_For_8_Template_button_click_5_listener() { const tool_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openTool(tool_r2)); });
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const tool_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tool_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tool_r2.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tool_r2.action);
} }
export class DashboardFreeToolsComponent {
    router;
    tools = [
        {
            title: 'SOP Maker & Reviewer',
            description: 'Create a structured statement of purpose draft with guided prompts.',
            action: 'Start SOP',
        },
        {
            title: 'Visa Checklist',
            description: 'Track documents, finances, appointments, and travel readiness.',
            action: 'Open checklist',
        },
        {
            title: 'Budget Planner',
            description: 'Estimate tuition, living costs, deposits, and savings gaps.',
            action: 'Plan budget',
        },
    ];
    constructor(router) {
        this.router = router;
    }
    openTool(tool) {
        if (tool.title === 'Budget Planner') {
            this.router.navigate(['/']);
            return;
        }
        if (tool.title === 'SOP Maker & Reviewer') {
            this.router.navigate(['/freetools']);
        }
    }
    static ɵfac = function DashboardFreeToolsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardFreeToolsComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardFreeToolsComponent, selectors: [["app-dashboard-free-tools"]], decls: 9, vars: 0, consts: [[1, "dashboard-card-content", "free-tools-page"], [1, "page-header"], [1, "eyebrow"], [1, "tools-grid"], [1, "tool-card"], ["type", "button", 3, "click"]], template: function DashboardFreeToolsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
            i0.ɵɵtext(3, "Student toolkit");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "h1");
            i0.ɵɵtext(5, "Free Tools");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(6, "div", 3);
            i0.ɵɵrepeaterCreate(7, DashboardFreeToolsComponent_For_8_Template, 7, 3, "article", 4, _forTrack0);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.tools);
        } }, dependencies: [CommonModule], styles: [".free-tools-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 76px);\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin: 0 0 6px;\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.tools-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.tool-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: 220px;\n  padding: 24px;\n}\n\n.tool-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.22rem;\n  margin: 0 0 12px;\n}\n\n.tool-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.tool-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #111827;\n  border: 0;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  margin-top: auto;\n  padding: 12px 14px;\n}\n\n.tool-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  margin-top: 20px;\n  padding: 24px;\n}\n\n.tool-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.35rem;\n  margin: 0 0 10px;\n}\n\n.tool-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n\n@media (max-width: 1100px) {\n  .tools-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardFreeToolsComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-free-tools', standalone: true, imports: [CommonModule], template: "<section class=\"dashboard-card-content free-tools-page\">\n  <div class=\"page-header\">\n    <p class=\"eyebrow\">Student toolkit</p>\n    <h1>Free Tools</h1>\n  </div>\n\n  <div class=\"tools-grid\">\n    @for (tool of tools; track tool.title) {\n      <article class=\"tool-card\">\n        <h2>{{ tool.title }}</h2>\n        <p>{{ tool.description }}</p>\n        <button type=\"button\" (click)=\"openTool(tool)\">{{ tool.action }}</button>\n      </article>\n    }\n  </div>\n\n  <!-- <section class=\"tool-panel\">\n    <p class=\"eyebrow\">Selected tool</p>\n    <h2>{{ selectedTool.title }}</h2>\n    <p>{{ selectedTool.detail }}</p>\n  </section> -->\n</section>\n", styles: [".free-tools-page {\n  min-height: calc(100vh - 76px);\n}\n\n.page-header {\n  margin-bottom: 22px;\n}\n\n.eyebrow {\n  color: #16a34a;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin: 0 0 6px;\n  text-transform: uppercase;\n}\n\nh1 {\n  color: #0f172a;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.tools-grid {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.tool-card {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: 220px;\n  padding: 24px;\n}\n\n.tool-card h2 {\n  color: #111827;\n  font-size: 1.22rem;\n  margin: 0 0 12px;\n}\n\n.tool-card p {\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n\n.tool-card button {\n  background: #111827;\n  border: 0;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  margin-top: auto;\n  padding: 12px 14px;\n}\n\n.tool-panel {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  margin-top: 20px;\n  padding: 24px;\n}\n\n.tool-panel h2 {\n  color: #111827;\n  font-size: 1.35rem;\n  margin: 0 0 10px;\n}\n\n.tool-panel p:last-child {\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n\n@media (max-width: 1100px) {\n  .tools-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardFreeToolsComponent, { className: "DashboardFreeToolsComponent", filePath: "src/app/pages/dashboard/free-tools/free-tools.ts", lineNumber: 18 }); })();
