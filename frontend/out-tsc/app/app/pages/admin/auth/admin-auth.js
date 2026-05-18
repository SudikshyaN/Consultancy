import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../services/auth.services";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
function AdminAuthComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
} }
function AdminAuthComponent_input_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 12);
} }
export class AdminAuthComponent {
    fb;
    authService;
    router;
    isLoginMode = true;
    isLoading = false;
    errorMessage = '';
    authForm;
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.authForm = this.fb.group({
            name: [''],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    toggleMode() {
        this.isLoginMode = !this.isLoginMode;
        this.errorMessage = '';
        const nameControl = this.authForm.get('name');
        if (this.isLoginMode) {
            nameControl?.clearValidators();
        }
        else {
            nameControl?.setValidators([Validators.required, Validators.minLength(2)]);
        }
        nameControl?.updateValueAndValidity();
        this.authForm.reset();
    }
    submit() {
        if (this.authForm.invalid) {
            this.authForm.markAllAsTouched();
            return;
        }
        this.isLoading = true;
        this.errorMessage = '';
        const { name, email, password } = this.authForm.value;
        const request = this.isLoginMode
            ? this.authService.loginAdmin({ email, password })
            : this.authService.registerAdmin({ name, email, password });
        request.pipe(timeout(8000), finalize(() => {
            this.isLoading = false;
        })).subscribe({
            next: () => {
                this.router.navigate(['/admin/overview']);
            },
            error: (err) => {
                this.errorMessage = err.name === 'TimeoutError'
                    ? 'Login request timed out. Please check that the backend is running.'
                    : err.error?.message || 'Unable to continue right now.';
            },
        });
    }
    static ɵfac = function AdminAuthComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminAuthComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminAuthComponent, selectors: [["app-admin-auth"]], decls: 19, vars: 7, consts: [[1, "admin-auth-page"], [1, "admin-auth-card"], [1, "admin-auth-brand"], [1, "admin-auth-form"], ["class", "admin-auth-error", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", "placeholder", "Admin name", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Email"], ["type", "password", "formControlName", "password", "placeholder", "Password"], ["type", "submit", 3, "disabled"], ["type", "button", 1, "admin-auth-toggle", 3, "click"], [1, "admin-auth-error"], ["type", "text", "formControlName", "name", "placeholder", "Admin name"]], template: function AdminAuthComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            i0.ɵɵtext(4, "Bidesh Padhna");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Admin panel");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 3)(8, "h2");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, AdminAuthComponent_p_10_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(11, "form", 5);
            i0.ɵɵlistener("ngSubmit", function AdminAuthComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
            i0.ɵɵtemplate(12, AdminAuthComponent_input_12_Template, 1, 0, "input", 6);
            i0.ɵɵelement(13, "input", 7)(14, "input", 8);
            i0.ɵɵelementStart(15, "button", 9);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 10);
            i0.ɵɵlistener("click", function AdminAuthComponent_Template_button_click_17_listener() { return ctx.toggleMode(); });
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.isLoginMode ? "Admin login" : "Admin signup");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.authForm);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoginMode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.isLoading);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isLoading ? "Please wait..." : ctx.isLoginMode ? "Login" : "Create account", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.isLoginMode ? "Need an admin account?" : "Already have an admin account?", " ");
        } }, dependencies: [CommonModule, i4.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: [".admin-auth-page[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #121212;\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 24px;\n}\n\n.admin-auth-card[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  border: 1px solid #343434;\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: 280px minmax(320px, 420px);\n  overflow: hidden;\n  width: min(100%, 760px);\n}\n\n.admin-auth-brand[_ngcontent-%COMP%] {\n  background: #2d2d2b;\n  border-right: 1px solid #3b3b39;\n  color: #fff;\n  padding: 36px 28px;\n}\n\n.admin-auth-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 8px;\n}\n\n.admin-auth-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c7c1b8;\n  margin: 0;\n}\n\n.admin-auth-form[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 36px 32px;\n}\n\n.admin-auth-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 18px;\n}\n\n.admin-auth-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.admin-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #111111;\n  border: 1px solid #3d3d3d;\n  border-radius: 10px;\n  color: #fff;\n  min-height: 48px;\n  padding: 0 14px;\n}\n\n.admin-auth-form[_ngcontent-%COMP%]   button[type='submit'][_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n  color: #121212;\n  min-height: 48px;\n}\n\n.admin-auth-toggle[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  margin-top: 14px;\n  padding: 0;\n}\n\n.admin-auth-error[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.18);\n  border-radius: 10px;\n  color: #fecaca;\n  padding: 10px 12px;\n}\n\n@media (max-width: 760px) {\n  .admin-auth-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAuthComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-auth', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<section class=\"admin-auth-page\">\n  <div class=\"admin-auth-card\">\n    <div class=\"admin-auth-brand\">\n      <h1>Bidesh Padhna</h1>\n      <p>Admin panel</p>\n    </div>\n\n    <div class=\"admin-auth-form\">\n      <h2>{{ isLoginMode ? 'Admin login' : 'Admin signup' }}</h2>\n\n      <p *ngIf=\"errorMessage\" class=\"admin-auth-error\">{{ errorMessage }}</p>\n\n      <form [formGroup]=\"authForm\" (ngSubmit)=\"submit()\">\n        <input\n          *ngIf=\"!isLoginMode\"\n          type=\"text\"\n          formControlName=\"name\"\n          placeholder=\"Admin name\"\n        />\n        <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" />\n        <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" />\n\n        <button type=\"submit\" [disabled]=\"isLoading\">\n          {{ isLoading ? 'Please wait...' : (isLoginMode ? 'Login' : 'Create account') }}\n        </button>\n      </form>\n\n      <button type=\"button\" class=\"admin-auth-toggle\" (click)=\"toggleMode()\">\n        {{ isLoginMode ? 'Need an admin account?' : 'Already have an admin account?' }}\n      </button>\n    </div>\n  </div>\n</section>\n", styles: [".admin-auth-page {\n  align-items: center;\n  background: #121212;\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 24px;\n}\n\n.admin-auth-card {\n  background: #1f1f1f;\n  border: 1px solid #343434;\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: 280px minmax(320px, 420px);\n  overflow: hidden;\n  width: min(100%, 760px);\n}\n\n.admin-auth-brand {\n  background: #2d2d2b;\n  border-right: 1px solid #3b3b39;\n  color: #fff;\n  padding: 36px 28px;\n}\n\n.admin-auth-brand h1 {\n  font-size: 2rem;\n  margin: 0 0 8px;\n}\n\n.admin-auth-brand p {\n  color: #c7c1b8;\n  margin: 0;\n}\n\n.admin-auth-form {\n  color: #fff;\n  padding: 36px 32px;\n}\n\n.admin-auth-form h2 {\n  font-size: 2rem;\n  margin: 0 0 18px;\n}\n\n.admin-auth-form form {\n  display: grid;\n  gap: 14px;\n}\n\n.admin-auth-form input {\n  background: #111111;\n  border: 1px solid #3d3d3d;\n  border-radius: 10px;\n  color: #fff;\n  min-height: 48px;\n  padding: 0 14px;\n}\n\n.admin-auth-form button[type='submit'] {\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n  color: #121212;\n  min-height: 48px;\n}\n\n.admin-auth-toggle {\n  color: #d3d3d3;\n  margin-top: 14px;\n  padding: 0;\n}\n\n.admin-auth-error {\n  background: rgba(185, 28, 28, 0.18);\n  border-radius: 10px;\n  color: #fecaca;\n  padding: 10px 12px;\n}\n\n@media (max-width: 760px) {\n  .admin-auth-card {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminAuthComponent, { className: "AdminAuthComponent", filePath: "src/app/pages/admin/auth/admin-auth.ts", lineNumber: 15 }); })();
