import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Layout } from '../layout/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/auth.services";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
function LoginComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
} }
function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.successMessage);
} }
function LoginComponent_div_13_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " First name must be at least 2 characters. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_13_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Last name must be at least 2 characters. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 12);
    i0.ɵɵelement(2, "input", 23);
    i0.ɵɵtemplate(3, LoginComponent_div_13_small_3_Template, 2, 0, "small", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelement(5, "input", 24);
    i0.ɵɵtemplate(6, LoginComponent_div_13_small_6_Template, 2, 0, "small", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx_r0.authForm.get("firstName")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r0.authForm.get("firstName")) == null ? null : tmp_1_0.invalid));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r0.authForm.get("lastName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r0.authForm.get("lastName")) == null ? null : tmp_2_0.invalid));
} }
function LoginComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Enter a valid email address. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Password must be at least 6 characters. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_label_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵelement(1, "input", 26);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Accept Terms & Conditions");
    i0.ɵɵelementEnd()();
} }
function LoginComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " You must accept the terms to continue. ");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    fb;
    authService;
    router;
    imageUrl = "login.jpg";
    isLoginMode = true;
    authForm;
    errorMessage = '';
    successMessage = '';
    isLoading = false;
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.authForm = this.fb.group({
            firstName: [''],
            lastName: ['', []],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            terms: [false],
        });
    }
    toggleMode() {
        this.isLoginMode = !this.isLoginMode;
        this.errorMessage = '';
        this.successMessage = '';
        this.authForm.reset();
        const firstNameControl = this.authForm.get('firstName');
        const lastNameControl = this.authForm.get('lastName');
        const termsControl = this.authForm.get('terms');
        if (this.isLoginMode) {
            firstNameControl?.clearValidators();
            lastNameControl?.clearValidators();
            termsControl?.clearValidators();
        }
        else {
            firstNameControl?.setValidators([Validators.required, Validators.minLength(2)]);
            lastNameControl?.setValidators([Validators.required, Validators.minLength(2)]);
            termsControl?.setValidators([Validators.requiredTrue]);
        }
        firstNameControl?.updateValueAndValidity();
        lastNameControl?.updateValueAndValidity();
        termsControl?.updateValueAndValidity();
    }
    onSubmit() {
        if (this.authForm.invalid) {
            this.authForm.markAllAsTouched();
            return;
        }
        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';
        const { firstName, lastName, email, password } = this.authForm.value;
        if (this.isLoginMode) {
            this.authService.login({ email, password }).subscribe({
                next: (res) => {
                    this.isLoading = false;
                    this.successMessage = res.message;
                    this.router.navigate(['/dashboard/main']);
                },
                error: (err) => {
                    this.isLoading = false;
                    this.errorMessage = err.error?.message || 'Login failed. Please try again.';
                }
            });
        }
        else {
            const name = `${firstName} ${lastName}`.trim();
            this.authService.register({ name, email, password }).subscribe({
                next: (res) => {
                    this.isLoading = false;
                    this.successMessage = res.message;
                    this.router.navigate(['/dashboard']);
                },
                error: (err) => {
                    this.isLoading = false;
                    this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
                }
            });
        }
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 12, consts: [[1, "login-page"], [1, "login-container"], [1, "login-left"], [1, "login-image-wrapper"], ["src", "login.jpg", "alt", "Login Image", 1, "login-image"], [1, "login-right"], [1, "login-form-box"], [1, "login-title"], ["class", "login-error", 4, "ngIf"], ["class", "login-success", 4, "ngIf"], [1, "login-form", 3, "ngSubmit", "formGroup"], ["class", "login-name-group", 4, "ngIf"], [1, "login-field"], ["type", "email", "formControlName", "email", "placeholder", "Email address", 1, "bg-white", "text-black", "border-color:", "var(--color-blue-900)"], [4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "bg-white", "text-black", "border-color:", "var(--color-blue-900);"], ["class", "login-terms", 4, "ngIf"], ["type", "submit", 1, "login-button", 3, "disabled"], [1, "login-divider"], ["type", "button", 1, "login-switch", 3, "click"], [1, "login-error"], [1, "login-success"], [1, "login-name-group"], ["type", "text", "formControlName", "firstName", "placeholder", "First name"], ["type", "text", "formControlName", "lastName", "placeholder", "Last name"], [1, "login-terms"], ["type", "checkbox", "formControlName", "terms"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-layout")(1, "div", 0)(2, "div", 1)(3, "section", 2)(4, "div", 3);
            i0.ɵɵelement(5, "img", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "section", 5)(7, "div", 6)(8, "h2", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, LoginComponent_p_10_Template, 2, 1, "p", 8)(11, LoginComponent_p_11_Template, 2, 1, "p", 9);
            i0.ɵɵelementStart(12, "form", 10);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
            i0.ɵɵtemplate(13, LoginComponent_div_13_Template, 7, 2, "div", 11);
            i0.ɵɵelementStart(14, "div", 12);
            i0.ɵɵelement(15, "input", 13);
            i0.ɵɵtemplate(16, LoginComponent_small_16_Template, 2, 0, "small", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵelement(18, "input", 15);
            i0.ɵɵtemplate(19, LoginComponent_small_19_Template, 2, 0, "small", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, LoginComponent_label_20_Template, 4, 0, "label", 16)(21, LoginComponent_small_21_Template, 2, 0, "small", 14);
            i0.ɵɵelementStart(22, "button", 17);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 18)(25, "span");
            i0.ɵɵtext(26, "or");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "button", 19);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_27_listener() { return ctx.toggleMode(); });
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_5_0;
            let tmp_6_0;
            let tmp_8_0;
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" ", ctx.isLoginMode ? "Login" : "Sign Up", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.successMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.authForm);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoginMode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx.authForm.get("email")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.authForm.get("email")) == null ? null : tmp_5_0.invalid));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx.authForm.get("password")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.authForm.get("password")) == null ? null : tmp_6_0.invalid));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoginMode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoginMode && ((tmp_8_0 = ctx.authForm.get("terms")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.authForm.get("terms")) == null ? null : tmp_8_0.invalid));
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isLoading ? "Please wait..." : ctx.isLoginMode ? "Login" : "Join us", " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.isLoginMode ? "No account? Sign up" : "Already have an account? Login", " ");
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, CommonModule, i4.NgIf, Layout], styles: [".login-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 80px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: #0b1d2a;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  max-width: 900px;\n  width: 100%;\n  height: auto;\n  background: #f8f7f5;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n\n.login-left[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.login-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.login-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 536px;\n  object-fit: cover;\n}\n\n.login-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: #f6f5f3;\n}\n\n.login-form-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n  margin-bottom: 42px;\n}\n\n.login-title[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n  font-size: 2.2rem;\n  font-weight: 800;\n  text-align: center;\n  margin-bottom: 24px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.login-name-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.login-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  padding: 0 12px;\n  font-size: 0.9rem;\n  border: 1px solid blue;\n  border-radius: 4px;\n  margin-bottom: 26px;\n  color:black;\n}\n\n.login-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color:black;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  background: blue;\n  color: #fff;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.login-divider[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  font-size: 0.8rem;\n  color:#274598;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-switch[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color:#274598;\n margin-left: 70px;\n}\n.login-terms[_ngcontent-%COMP%]{\n  color:black;\n}\n.login-error[_ngcontent-%COMP%]{\n  color:#0b1d2a;\n}\n\n@media (max-width: 900px) {\n  .login-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n\n  .login-left[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [ReactiveFormsModule, CommonModule, Layout], template: "<app-layout>\n<div class=\"login-page\">\n  <div class=\"login-container\">\n\n    <section class=\"login-left\">\n      <div class=\"login-image-wrapper\">\n        <img src=\"login.jpg\" alt=\"Login Image\" class=\"login-image\">\n      </div>\n    </section>\n\n    <section class=\"login-right\">\n      <div class=\"login-form-box\">\n\n        <h2 class=\"login-title\">\n          {{ isLoginMode ? 'Login' : 'Sign Up' }}\n        </h2>\n\n        <p *ngIf=\"errorMessage\" class=\"login-error\">{{ errorMessage }}</p>\n        <p *ngIf=\"successMessage\" class=\"login-success\">{{ successMessage }}</p>\n\n        <form [formGroup]=\"authForm\" (ngSubmit)=\"onSubmit()\" class=\"login-form\">\n\n          <div class=\"login-name-group\" *ngIf=\"!isLoginMode\">\n            <div class=\"login-field\">\n              <input type=\"text\" formControlName=\"firstName\" placeholder=\"First name\" />\n              <small *ngIf=\"authForm.get('firstName')?.touched && authForm.get('firstName')?.invalid\">\n                First name must be at least 2 characters.\n              </small>\n            </div>\n\n            <div class=\"login-field\">\n              <input type=\"text\" formControlName=\"lastName\" placeholder=\"Last name\" />\n              <small *ngIf=\"authForm.get('lastName')?.touched && authForm.get('lastName')?.invalid\">\n                Last name must be at least 2 characters.\n              </small>\n            </div>\n          </div>\n\n          <div class=\"login-field\">\n            <input type=\"email\" class=\"bg-white text-black border-color: var(--color-blue-900)\" formControlName=\"email\" placeholder=\"Email address\" />\n            <small *ngIf=\"authForm.get('email')?.touched && authForm.get('email')?.invalid\">\n              Enter a valid email address.\n            </small>\n          </div>\n\n          <div class=\"login-field \">\n            <input type=\"password\" class=\"bg-white text-black border-color: var(--color-blue-900);\" formControlName=\"password\" placeholder=\"Password\" />\n            <small *ngIf=\"authForm.get('password')?.touched && authForm.get('password')?.invalid\">\n              Password must be at least 6 characters.\n            </small>\n          </div>\n\n          <label class=\"login-terms\" *ngIf=\"!isLoginMode\">\n            <input type=\"checkbox\" formControlName=\"terms\" />\n            <span>Accept Terms & Conditions</span>\n          </label>\n\n          <small *ngIf=\"!isLoginMode && authForm.get('terms')?.touched && authForm.get('terms')?.invalid\">\n            You must accept the terms to continue.\n          </small>\n\n          <button type=\"submit\" class=\"login-button\" [disabled]=\"isLoading\">\n            {{ isLoading ? 'Please wait...' : (isLoginMode ? 'Login' : 'Join us') }}\n          </button>\n\n        </form>\n\n        <div class=\"login-divider\"><span>or</span></div>\n\n        <button type=\"button\" (click)=\"toggleMode()\" class=\"login-switch\">\n          {{ isLoginMode ? 'No account? Sign up' : 'Already have an account? Login' }}\n        </button>\n\n      </div>\n    </section>\n\n  </div>\n</div>\n</app-layout>", styles: [".login-page {\n  min-height: calc(100vh - 80px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: #0b1d2a;\n}\n\n.login-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  max-width: 900px;\n  width: 100%;\n  height: auto;\n  background: #f8f7f5;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n\n.login-left {\n  height: 100%;\n}\n\n.login-image-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.login-image {\n  width: 100%;\n  height: 536px;\n  object-fit: cover;\n}\n\n.login-right {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background: #f6f5f3;\n}\n\n.login-form-box {\n  width: 100%;\n  max-width: 320px;\n  margin-bottom: 42px;\n}\n\n.login-title {\n  color: #1d4ed8;\n  font-size: 2.2rem;\n  font-weight: 800;\n  text-align: center;\n  margin-bottom: 24px;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.login-name-group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.login-field input {\n  width: 100%;\n  height: 44px;\n  padding: 0 12px;\n  font-size: 0.9rem;\n  border: 1px solid blue;\n  border-radius: 4px;\n  margin-bottom: 26px;\n  color:black;\n}\n\n.login-field small {\n  font-size: 0.75rem;\n  color:black;\n}\n\n.login-button {\n  width: 100%;\n  height: 44px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  background: blue;\n  color: #fff;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.login-divider {\n  margin: 16px 0;\n  font-size: 0.8rem;\n  color:#274598;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-switch {\n  font-size: 0.85rem;\n  color:#274598;\n margin-left: 70px;\n}\n.login-terms{\n  color:black;\n}\n.login-error{\n  color:#0b1d2a;\n}\n\n@media (max-width: 900px) {\n  .login-container {\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n\n  .login-left {\n    height: 200px;\n  }\n}"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.ts", lineNumber: 15 }); })();
