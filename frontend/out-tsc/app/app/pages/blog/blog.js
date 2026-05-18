import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from '../layout/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BlogComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 14);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 15)(11, "span", 16);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(blog_r1.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(blog_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(blog_r1.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", blog_r1.author, " \u2022 ", blog_r1.date, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(blog_r1.time);
} }
export class BlogComponent {
    blogs = [
        {
            category: 'SOP TIPS',
            title: 'How to write a statement of purpose that actually gets you admitted',
            description: 'The 5 things top-ranked universities look for in an SOP — and the 3 mistakes Nepali students make most often.',
            author: 'Priya Shrestha',
            date: 'Mar 22, 2025',
            time: '8 min'
        },
        {
            category: 'FINANCE',
            title: 'How much money do you actually need to study in Germany?',
            description: 'Blocked account, semester fees, rent in Berlin vs Munich — a complete breakdown for Nepali students applying this year.',
            author: 'Arjun Tamang',
            date: 'Mar 18, 2025',
            time: '6 min'
        },
        {
            category: 'VISA GUIDE',
            title: 'Canada study permit 2025 — what changed for Nepali students',
            description: 'PAL requirements, SDS vs regular stream, and the new CAP on international students — explained simply.',
            author: 'Rohan KC',
            date: 'Mar 14, 2025',
            time: '10 min'
        }
    ];
    static ɵfac = function BlogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BlogComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BlogComponent, selectors: [["app-blog"]], decls: 36, vars: 1, consts: [[1, "blog-page"], [1, "blog-header"], [1, "badge"], [1, "filter-tabs"], [1, "featured-card"], [1, "featured-content"], [1, "tag"], [1, "meta"], [1, "arrow"], [1, "blog-list"], ["class", "blog-item", 4, "ngFor", "ngForOf"], [1, "blog-item"], [1, "left"], [1, "category"], [1, "desc"], [1, "right"], [1, "time"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-layout")(1, "section", 0)(2, "div", 1)(3, "div", 2);
            i0.ɵɵtext(4, "RESOURCES & GUIDES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, " The Bidesh Padhna ");
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Blog");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, " Visa guides, SOP tips, finance breakdowns, and real student stories. Written for Nepali students, by Nepali students. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 3)(12, "button");
            i0.ɵɵtext(13, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button");
            i0.ɵɵtext(15, "Visa guides");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button");
            i0.ɵɵtext(17, "SOP tips");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button");
            i0.ɵɵtext(19, "Finance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button");
            i0.ɵɵtext(21, "Universities");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button");
            i0.ɵɵtext(23, "Student life");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 4)(25, "div", 5)(26, "span", 6);
            i0.ɵɵtext(27, "FEATURED \u2022 VISA GUIDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "h2");
            i0.ɵɵtext(29, " The complete guide to Australia Subclass 500 student visa for Nepali students in 2025 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "p", 7);
            i0.ɵɵtext(31, "Rohan KC \u2022 Apr 8, 2025 \u2022 12 min read");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 8);
            i0.ɵɵtext(33, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 9);
            i0.ɵɵtemplate(35, BlogComponent_div_35_Template, 13, 6, "div", 10);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(35);
            i0.ɵɵproperty("ngForOf", ctx.blogs);
        } }, dependencies: [CommonModule, i1.NgForOf, Layout], styles: [".blog-page[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: auto;\n  padding: 60px 20px;\n  background: #f8fafc;\n}\n\n.blog-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 12px;\n  letter-spacing: 2px;\n  margin-bottom: 10px;\n}\n\n.blog-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin: 10px 0;\n  color:#0b1c2c;\n}\n\n.blog-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-style: italic;\n}\n\n.blog-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  max-width: 600px;\n}\n\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 30px 0;\n  flex-wrap: wrap;\n}\n\n.filter-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #10b981;;\n  cursor: pointer;\n}\n\n.featured-card[_ngcontent-%COMP%] {\n  background: #0b1c2c;\n  color: white;\n  border-radius: 16px;\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.featured-card[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #10b981;\n}\n\n.featured-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 20px;\n}\n\n.featured-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.featured-card[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.blog-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.blog-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 20px;\n  color:#0b1c2c;\n}\n\n.blog-item[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #10b981;\n  padding: 4px 10px;\n  border-radius: 10px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\n\n.blog-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 18px;\n}\n\n.blog-item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 5px 0;\n}\n\n.blog-item[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.blog-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  background: #f1f5f9;\n  padding: 6px 10px;\n  border-radius: 10px;\n}\n\n@media (max-width: 768px) {\n  .blog-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlogComponent, [{
        type: Component,
        args: [{ selector: 'app-blog', standalone: true, imports: [CommonModule, Layout], template: "<app-layout>\n\n<section class=\"blog-page\">\n\n  <div class=\"blog-header\">\n    <div class=\"badge\">RESOURCES & GUIDES</div>\n\n    <h1>\n      The Bidesh Padhna <span>Blog</span>\n    </h1>\n\n    <p>\n      Visa guides, SOP tips, finance breakdowns, and real student stories.\n      Written for Nepali students, by Nepali students.\n    </p>\n  </div>\n\n  <div class=\"filter-tabs\">\n    <button>All</button>\n    <button>Visa guides</button>\n    <button>SOP tips</button>\n    <button>Finance</button>\n    <button>Universities</button>\n    <button>Student life</button>\n  </div>\n\n  <div class=\"featured-card\">\n    <div class=\"featured-content\">\n      <span class=\"tag\">FEATURED \u2022 VISA GUIDE</span>\n\n      <h2>\n        The complete guide to Australia Subclass 500 student visa for Nepali students in 2025\n      </h2>\n\n      <p class=\"meta\">Rohan KC \u2022 Apr 8, 2025 \u2022 12 min read</p>\n    </div>\n\n    <div class=\"arrow\">\u2192</div>\n  </div>\n\n  <div class=\"blog-list\">\n\n    <div class=\"blog-item\" *ngFor=\"let blog of blogs\">\n\n      <div class=\"left\">\n        <span class=\"category\">{{ blog.category }}</span>\n\n        <h3>{{ blog.title }}</h3>\n\n        <p class=\"desc\">{{ blog.description }}</p>\n\n        <div class=\"meta\">\n          {{ blog.author }} \u2022 {{ blog.date }}\n        </div>\n      </div>\n\n      <div class=\"right\">\n        <span class=\"time\">{{ blog.time }}</span>\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n\n</app-layout>", styles: [".blog-page {\n  max-width: 100%;\n  margin: auto;\n  padding: 60px 20px;\n  background: #f8fafc;\n}\n\n.blog-header .badge {\n  color: #10b981;\n  font-size: 12px;\n  letter-spacing: 2px;\n  margin-bottom: 10px;\n}\n\n.blog-header h1 {\n  font-size: 40px;\n  margin: 10px 0;\n  color:#0b1c2c;\n}\n\n.blog-header h1 span {\n  color: #10b981;\n  font-style: italic;\n}\n\n.blog-header p {\n  color: #64748b;\n  max-width: 600px;\n}\n\n.filter-tabs {\n  display: flex;\n  gap: 10px;\n  margin: 30px 0;\n  flex-wrap: wrap;\n}\n\n.filter-tabs button {\n  padding: 8px 14px;\n  border-radius: 20px;\n  border: 1px solid #e5e7eb;\n  background: #10b981;;\n  cursor: pointer;\n}\n\n.featured-card {\n  background: #0b1c2c;\n  color: white;\n  border-radius: 16px;\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.featured-card .tag {\n  font-size: 12px;\n  color: #10b981;\n}\n\n.featured-card h2 {\n  margin: 10px 0;\n  font-size: 20px;\n}\n\n.featured-card .meta {\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.featured-card .arrow {\n  font-size: 24px;\n}\n\n.blog-list {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.blog-item {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 20px;\n  color:#0b1c2c;\n}\n\n.blog-item .category {\n  font-size: 12px;\n  background: #10b981;\n  padding: 4px 10px;\n  border-radius: 10px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\n\n.blog-item h3 {\n  margin: 5px 0;\n  font-size: 18px;\n}\n\n.blog-item .desc {\n  font-size: 14px;\n  color: #64748b;\n  margin: 5px 0;\n}\n\n.blog-item .meta {\n  font-size: 12px;\n  color: #94a3b8;\n}\n\n.blog-item .time {\n  font-size: 12px;\n  background: #f1f5f9;\n  padding: 6px 10px;\n  border-radius: 10px;\n}\n\n@media (max-width: 768px) {\n  .blog-item {\n    flex-direction: column;\n    gap: 10px;\n  }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/app/pages/blog/blog.ts", lineNumber: 12 }); })();
