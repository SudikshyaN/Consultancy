import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../services/auth.services";
import * as i3 from "@angular/common";
function ProfileComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 35)(1, "span", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 37)(4, "strong", 38);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 39);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap("stat-icon tone-" + card_r1.iconTone);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", card_r1.icon, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(card_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r1.title);
} }
function ProfileComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function ProfileComponent_button_50_Template_button_click_0_listener() { const field_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleSelection("studyFields", field_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const field_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (tmp_2_0 = ctx_r3.profileForm.get("studyFields")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.includes(field_r3));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", field_r3, " ");
} }
function ProfileComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function ProfileComponent_button_55_Template_button_click_0_listener() { const country_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleSelection("preferredCountries", country_r6.name)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const country_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (tmp_2_0 = ctx_r3.profileForm.get("preferredCountries")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.includes(country_r6.name));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", country_r6.flag, " ", country_r6.name, " ");
} }
function ProfileComponent_button_60_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function ProfileComponent_button_60_Template_button_click_0_listener() { const year_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleSelection("intakeYear", year_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const year_r8 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (tmp_2_0 = ctx_r3.profileForm.get("intakeYear")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.includes(year_r8));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", year_r8, " ");
} }
function ProfileComponent_p_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.successMessage);
} }
function ProfileComponent_p_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.errorMessage);
} }
export class ProfileComponent {
    fb;
    authService;
    platformId = inject(PLATFORM_ID);
    profileForm;
    user = null;
    isLoading = false;
    isSaving = false;
    successMessage = '';
    errorMessage = '';
    statCards = [
        { title: 'Applications', value: 4, caption: '', icon: '📋', iconTone: 'blue' },
        { title: 'Wishlist', value: 6, caption: '', icon: '🎫', iconTone: 'mint' },
        { title: 'Countries', value: 5, caption: '', icon: '🌍', iconTone: 'gold' },
        { title: 'GPA', value: '0.0', caption: '', icon: '⭐', iconTone: 'lavender' }
    ];
    availableStudyFields = [
        'Artificial Intelligence', 'Data Science', 'Machine Learning',
        'Cybersecurity', 'Cloud Computing', 'Robotics', 'Bioinformatics',
        'HCI', 'NLP', 'Computer Vision'
    ];
    availableCountries = [
        { name: 'USA', flag: '🇺🇸' },
        { name: 'UK', flag: '🇬🇧' },
        { name: 'Canada', flag: '🇨🇦' },
        { name: 'Germany', flag: '🇩🇪' },
        { name: 'Australia', flag: '🇦🇺' },
        { name: 'Singapore', flag: '🇸🇬' },
        { name: 'Netherlands', flag: '🇳🇱' },
        { name: 'Sweden', flag: '🇸🇪' }
    ];
    availableIntakeYears = ['2026', '2027'];
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    ngOnInit() {
        this.initForm();
        this.loadProfile();
    }
    initForm() {
        this.profileForm = this.fb.group({
            name: ['', Validators.required],
            dob: [''],
            email: [{ value: '', disabled: true }],
            phone: [''],
            nationality: [''],
            city: [''],
            about: [''],
            degree: [''],
            gpa: [''],
            university: [''],
            graduationYear: [''],
            ielts: [''],
            gmat: [''],
            toefl: [''],
            studyFields: [[]],
            preferredCountries: [[]],
            intakeYear: [[]]
        });
    }
    toggleSelection(field, value) {
        const control = this.profileForm.get(field);
        if (!control)
            return;
        let currentSelection = [...(control.value || [])];
        const index = currentSelection.indexOf(value);
        if (index > -1) {
            currentSelection.splice(index, 1);
        }
        else {
            currentSelection.push(value);
        }
        control.setValue(currentSelection);
        this.profileForm.markAsDirty();
    }
    loadProfile() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.isLoading = true;
        this.authService.getProfile().subscribe({
            next: (res) => {
                try {
                    if (res && res.user) {
                        this.user = res.user;
                        this.updateFormAndStats(this.user);
                    }
                }
                catch (e) {
                    console.error(e);
                }
                this.isLoading = false;
            },
            error: () => {
                this.errorMessage = 'Failed to load profile';
                this.isLoading = false;
            }
        });
    }
    updateFormAndStats(user) {
        if (!user)
            return;
        const profile = user.profile || {};
        try {
            this.profileForm.patchValue({
                name: user.name || '',
                email: user.email || '',
                dob: profile.dob || '',
                phone: profile.phone || '',
                nationality: profile.nationality || '',
                city: profile.city || '',
                about: profile.about || '',
                degree: profile.degree || '',
                gpa: profile.gpa || '',
                university: profile.university || '',
                graduationYear: profile.graduationYear || '',
                ielts: profile.ielts || '',
                gmat: profile.gmat || '',
                toefl: profile.toefl || '',
                studyFields: profile.studyFields || [],
                preferredCountries: profile.preferredCountries || [],
                intakeYear: profile.intakeYear || []
            });
            if (profile.gpa) {
                this.statCards[3].value = profile.gpa;
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    onSubmit() {
        if (this.profileForm.invalid)
            return;
        this.isSaving = true;
        this.successMessage = '';
        this.errorMessage = '';
        const formData = this.profileForm.getRawValue();
        this.authService.updateProfile(formData).subscribe({
            next: (res) => {
                this.isSaving = false;
                this.successMessage = 'Profile updated successfully';
                this.user = res.user;
                if (this.user.profile?.gpa) {
                    this.statCards[3].value = this.user.profile.gpa;
                }
                setTimeout(() => this.successMessage = '', 3000);
            },
            error: () => {
                this.isSaving = false;
                this.errorMessage = 'Failed to update profile';
                setTimeout(() => this.errorMessage = '', 3000);
            }
        });
    }
    static ɵfac = function ProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], decls: 109, vars: 9, consts: [[1, "dashboard-page", "profile-page"], [1, "stats-grid"], ["type", "button", "class", "stat-card", 4, "ngFor", "ngForOf"], [1, "profile-content-grid", 3, "ngSubmit", "formGroup"], [1, "profile-col", "main-col"], [1, "profile-card"], [1, "card-header"], [1, "header-icon"], [1, "form-grid"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "E.g. John Doe"], ["type", "date", "formControlName", "dob"], ["type", "email", "formControlName", "email"], ["type", "text", "formControlName", "phone", "placeholder", "+1 234 567 8900"], ["type", "text", "formControlName", "nationality", "placeholder", "E.g. Nepali"], ["type", "text", "formControlName", "city", "placeholder", "E.g. Kathmandu"], [1, "form-group", "full-width"], ["formControlName", "about", "rows", "3", "placeholder", "Tell us about your background and goals..."], [1, "profile-card", "mt-16"], [1, "preferences-section"], [1, "pills-container"], ["type", "button", "class", "pill-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "preferences-section", "mt-16"], [1, "profile-col", "side-col"], ["type", "text", "formControlName", "degree", "placeholder", "E.g. BSc Computer Science"], ["type", "text", "formControlName", "gpa", "placeholder", "E.g. 3.8 / 4.0"], ["type", "text", "formControlName", "university", "placeholder", "E.g. Tribhuvan University"], ["type", "text", "formControlName", "graduationYear", "placeholder", "E.g. 2025"], ["type", "text", "formControlName", "ielts", "placeholder", "E.g. 7.5"], ["type", "text", "formControlName", "gmat", "placeholder", "E.g. 720"], ["type", "text", "formControlName", "toefl", "placeholder", "E.g. 105"], [1, "action-buttons"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "save-btn", 3, "disabled"], ["type", "button", 1, "stat-card"], [1, "stat-icon"], [1, "stat-copy"], [1, "stat-value"], [1, "stat-title"], ["type", "button", 1, "pill-btn", 3, "click"], [1, "success-message"], [1, "error-message"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, ProfileComponent_button_2_Template, 8, 5, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form", 3);
            i0.ɵɵlistener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
            i0.ɵɵtext(8, "\uD83D\uDC64");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h2");
            i0.ɵɵtext(10, "Personal information");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 8)(12, "div", 9)(13, "label");
            i0.ɵɵtext(14, "FULL NAME");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 9)(17, "label");
            i0.ɵɵtext(18, "DATE OF BIRTH");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 9)(21, "label");
            i0.ɵɵtext(22, "EMAIL");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 9)(25, "label");
            i0.ɵɵtext(26, "PHONE");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 9)(29, "label");
            i0.ɵɵtext(30, "NATIONALITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "input", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 9)(33, "label");
            i0.ɵɵtext(34, "CITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 16)(37, "label");
            i0.ɵɵtext(38, "ABOUT YOU");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "textarea", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 18)(41, "div", 6)(42, "span", 7);
            i0.ɵɵtext(43, "\uD83D\uDCA1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "h2");
            i0.ɵɵtext(45, "Interests & preferences");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 19)(47, "h3");
            i0.ɵɵtext(48, "STUDY FIELDS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "div", 20);
            i0.ɵɵtemplate(50, ProfileComponent_button_50_Template, 2, 3, "button", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "div", 22)(52, "h3");
            i0.ɵɵtext(53, "PREFERRED COUNTRIES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 20);
            i0.ɵɵtemplate(55, ProfileComponent_button_55_Template, 2, 4, "button", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 22)(57, "h3");
            i0.ɵɵtext(58, "INTAKE YEAR");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "div", 20);
            i0.ɵɵtemplate(60, ProfileComponent_button_60_Template, 2, 3, "button", 21);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(61, "div", 23)(62, "div", 5)(63, "div", 6)(64, "span", 7);
            i0.ɵɵtext(65, "\uD83C\uDF93");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "h2");
            i0.ɵɵtext(67, "Academic background");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "div", 8)(69, "div", 9)(70, "label");
            i0.ɵɵtext(71, "DEGREE");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(72, "input", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "div", 9)(74, "label");
            i0.ɵɵtext(75, "GPA / CGPA");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(76, "input", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "div", 9)(78, "label");
            i0.ɵɵtext(79, "UNIVERSITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(80, "input", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 9)(82, "label");
            i0.ɵɵtext(83, "GRADUATION YEAR");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(84, "input", 27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "div", 18)(86, "div", 6)(87, "span", 7);
            i0.ɵɵtext(88, "\uD83D\uDCCA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "h2");
            i0.ɵɵtext(90, "Test scores");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(91, "div", 8)(92, "div", 9)(93, "label");
            i0.ɵɵtext(94, "IELTS (Overall Band)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(95, "input", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "div", 9)(97, "label");
            i0.ɵɵtext(98, "GMAT");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(99, "input", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "div", 9)(101, "label");
            i0.ɵɵtext(102, "TOEFL");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(103, "input", 30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(104, "div", 31);
            i0.ɵɵtemplate(105, ProfileComponent_p_105_Template, 2, 1, "p", 32)(106, ProfileComponent_p_106_Template, 2, 1, "p", 33);
            i0.ɵɵelementStart(107, "button", 34);
            i0.ɵɵtext(108);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.statCards);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.profileForm);
            i0.ɵɵadvance(47);
            i0.ɵɵproperty("ngForOf", ctx.availableStudyFields);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.availableCountries);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.availableIntakeYears);
            i0.ɵɵadvance(45);
            i0.ɵɵproperty("ngIf", ctx.successMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isSaving || ctx.profileForm.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isSaving ? "Saving..." : "Save Changes", " ");
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: [".profile-page[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e6e1da;\n  border-radius: 14px;\n  color: #111827;\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  text-align: left;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 12px;\n  display: flex;\n  font-size: 1.5rem;\n  height: 48px;\n  justify-content: center;\n  width: 48px;\n}\n\n.tone-blue[_ngcontent-%COMP%] { background: #e0f2fe; }\n.tone-mint[_ngcontent-%COMP%] { background: #d1fae5; }\n.tone-gold[_ngcontent-%COMP%] { background: #fef08a; }\n.tone-lavender[_ngcontent-%COMP%] { background: #ede9fe; }\n\n.stat-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111;\n}\n\n.stat-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-top: 4px;\n}\n\n.profile-content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid #e6e1da;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 16px;\n\n  h2 {\n    margin: 0;\n    font-size: 1.125rem;\n    font-weight: 600;\n    color: #0f172a;\n  }\n\n  .header-icon {\n    font-size: 1.25rem;\n  }\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  &.full-width {\n    grid-column: 1 / -1;\n  }\n\n  label {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  input, textarea {\n    padding: 12px 16px;\n    border: 1px solid #e2e8f0;\n    border-radius: 8px;\n    background: #f1f5f9;\n    font-size: 0.95rem;\n    color: #1e293b;\n    transition: all 0.2s;\n\n    &:focus {\n      outline: none;\n      border-color: #3b82f6;\n      background: white;\n      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n    }\n    \n    &:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n  }\n  \n  textarea {\n    resize: vertical;\n  }\n}\n\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.test-scores-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.test-score-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #e2e8f0;\n\n  &:last-child {\n    border-bottom: none;\n  }\n}\n\n.test-score-info[_ngcontent-%COMP%] {\n  h4 {\n    margin: 0 0 4px;\n    font-size: 0.95rem;\n    color: #0f172a;\n  }\n  p {\n    margin: 0;\n    font-size: 0.8rem;\n    color: #64748b;\n  }\n}\n\n.test-score-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  .score {\n    font-size: 1.125rem;\n    font-weight: 700;\n    color: #2563eb;\n  }\n\n  .badge {\n    padding: 4px 8px;\n    border-radius: 12px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    \n    &.badge-strong {\n      background: #eff6ff;\n      color: #2563eb;\n    }\n  }\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  justify-content: flex-end;\n\n  .save-btn {\n    background: #2563eb;\n    color: white;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 8px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background 0.2s;\n\n    &:hover:not(:disabled) {\n      background: #1d4ed8;\n    }\n\n    &:disabled {\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n  }\n}\n\n.success-message[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .profile-content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.preferences-section[_ngcontent-%COMP%] {\n  h3 {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    margin: 0 0 12px;\n  }\n}\n\n.pills-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.pill-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 6px 16px;\n  font-size: 0.875rem;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n\n  &:hover {\n    border-color: #cbd5e1;\n    background: #f8fafc;\n  }\n\n  &.active {\n    background: #eff6ff;\n    border-color: #3b82f6;\n    color: #1d4ed8;\n    font-weight: 500;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profile', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<section class=\"dashboard-page profile-page\">\n  <div class=\"stats-grid\">\n    <button\n      *ngFor=\"let card of statCards; let i = index\"\n      type=\"button\"\n      class=\"stat-card\"\n    >\n      <span class=\"stat-icon\" [class]=\"'stat-icon tone-' + card.iconTone\">\n        {{ card.icon }}\n      </span>\n      <div class=\"stat-copy\">\n        <strong class=\"stat-value\">{{ card.value }}</strong>\n        <span class=\"stat-title\">{{ card.title }}</span>\n      </div>\n    </button>\n  </div>\n\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" class=\"profile-content-grid\">\n    <!-- Left Column -->\n    <div class=\"profile-col main-col\">\n      <div class=\"profile-card\">\n        <div class=\"card-header\">\n          <span class=\"header-icon\">\uD83D\uDC64</span>\n          <h2>Personal information</h2>\n        </div>\n\n        <div class=\"form-grid\">\n          <div class=\"form-group\">\n            <label>FULL NAME</label>\n            <input type=\"text\" formControlName=\"name\" placeholder=\"E.g. John Doe\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>DATE OF BIRTH</label>\n            <input type=\"date\" formControlName=\"dob\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>EMAIL</label>\n            <input type=\"email\" formControlName=\"email\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>PHONE</label>\n            <input type=\"text\" formControlName=\"phone\" placeholder=\"+1 234 567 8900\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>NATIONALITY</label>\n            <input type=\"text\" formControlName=\"nationality\" placeholder=\"E.g. Nepali\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>CITY</label>\n            <input type=\"text\" formControlName=\"city\" placeholder=\"E.g. Kathmandu\" />\n          </div>\n\n          <div class=\"form-group full-width\">\n            <label>ABOUT YOU</label>\n            <textarea formControlName=\"about\" rows=\"3\" placeholder=\"Tell us about your background and goals...\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"profile-card mt-16\">\n        <div class=\"card-header\">\n          <span class=\"header-icon\">\uD83D\uDCA1</span>\n          <h2>Interests & preferences</h2>\n        </div>\n        \n        <div class=\"preferences-section\">\n          <h3>STUDY FIELDS</h3>\n          <div class=\"pills-container\">\n            <button \n              type=\"button\" \n              class=\"pill-btn\" \n              *ngFor=\"let field of availableStudyFields\"\n              [class.active]=\"profileForm.get('studyFields')?.value?.includes(field)\"\n              (click)=\"toggleSelection('studyFields', field)\">\n              {{ field }}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"preferences-section mt-16\">\n          <h3>PREFERRED COUNTRIES</h3>\n          <div class=\"pills-container\">\n            <button \n              type=\"button\" \n              class=\"pill-btn\" \n              *ngFor=\"let country of availableCountries\"\n              [class.active]=\"profileForm.get('preferredCountries')?.value?.includes(country.name)\"\n              (click)=\"toggleSelection('preferredCountries', country.name)\">\n              {{ country.flag }} {{ country.name }}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"preferences-section mt-16\">\n          <h3>INTAKE YEAR</h3>\n          <div class=\"pills-container\">\n            <button \n              type=\"button\" \n              class=\"pill-btn\" \n              *ngFor=\"let year of availableIntakeYears\"\n              [class.active]=\"profileForm.get('intakeYear')?.value?.includes(year)\"\n              (click)=\"toggleSelection('intakeYear', year)\">\n              {{ year }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Right Column -->\n    <div class=\"profile-col side-col\">\n      <div class=\"profile-card\">\n        <div class=\"card-header\">\n          <span class=\"header-icon\">\uD83C\uDF93</span>\n          <h2>Academic background</h2>\n        </div>\n\n        <div class=\"form-grid\">\n          <div class=\"form-group\">\n            <label>DEGREE</label>\n            <input type=\"text\" formControlName=\"degree\" placeholder=\"E.g. BSc Computer Science\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>GPA / CGPA</label>\n            <input type=\"text\" formControlName=\"gpa\" placeholder=\"E.g. 3.8 / 4.0\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>UNIVERSITY</label>\n            <input type=\"text\" formControlName=\"university\" placeholder=\"E.g. Tribhuvan University\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>GRADUATION YEAR</label>\n            <input type=\"text\" formControlName=\"graduationYear\" placeholder=\"E.g. 2025\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"profile-card mt-16\">\n        <div class=\"card-header\">\n          <span class=\"header-icon\">\uD83D\uDCCA</span>\n          <h2>Test scores</h2>\n        </div>\n        \n        <div class=\"form-grid\">\n          <div class=\"form-group\">\n            <label>IELTS (Overall Band)</label>\n            <input type=\"text\" formControlName=\"ielts\" placeholder=\"E.g. 7.5\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>GMAT</label>\n            <input type=\"text\" formControlName=\"gmat\" placeholder=\"E.g. 720\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>TOEFL</label>\n            <input type=\"text\" formControlName=\"toefl\" placeholder=\"E.g. 105\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"action-buttons\">\n        <p *ngIf=\"successMessage\" class=\"success-message\">{{ successMessage }}</p>\n        <p *ngIf=\"errorMessage\" class=\"error-message\">{{ errorMessage }}</p>\n        <button type=\"submit\" class=\"save-btn\" [disabled]=\"isSaving || profileForm.invalid\">\n          {{ isSaving ? 'Saving...' : 'Save Changes' }}\n        </button>\n      </div>\n    </div>\n  </form>\n</section>\n", styles: [".profile-page {\n  padding-bottom: 40px;\n}\n\n.stats-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-bottom: 24px;\n}\n\n.stat-card {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e6e1da;\n  border-radius: 14px;\n  color: #111827;\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  text-align: left;\n}\n\n.stat-icon {\n  align-items: center;\n  border-radius: 12px;\n  display: flex;\n  font-size: 1.5rem;\n  height: 48px;\n  justify-content: center;\n  width: 48px;\n}\n\n.tone-blue { background: #e0f2fe; }\n.tone-mint { background: #d1fae5; }\n.tone-gold { background: #fef08a; }\n.tone-lavender { background: #ede9fe; }\n\n.stat-copy {\n  display: flex;\n  flex-direction: column;\n}\n\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111;\n}\n\n.stat-title {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-top: 4px;\n}\n\n.profile-content-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n\n.profile-card {\n  background: #f8fafc;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid #e6e1da;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid #e2e8f0;\n  padding-bottom: 16px;\n\n  h2 {\n    margin: 0;\n    font-size: 1.125rem;\n    font-weight: 600;\n    color: #0f172a;\n  }\n\n  .header-icon {\n    font-size: 1.25rem;\n  }\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  &.full-width {\n    grid-column: 1 / -1;\n  }\n\n  label {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  input, textarea {\n    padding: 12px 16px;\n    border: 1px solid #e2e8f0;\n    border-radius: 8px;\n    background: #f1f5f9;\n    font-size: 0.95rem;\n    color: #1e293b;\n    transition: all 0.2s;\n\n    &:focus {\n      outline: none;\n      border-color: #3b82f6;\n      background: white;\n      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n    }\n    \n    &:disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n  }\n  \n  textarea {\n    resize: vertical;\n  }\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.test-scores-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.test-score-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #e2e8f0;\n\n  &:last-child {\n    border-bottom: none;\n  }\n}\n\n.test-score-info {\n  h4 {\n    margin: 0 0 4px;\n    font-size: 0.95rem;\n    color: #0f172a;\n  }\n  p {\n    margin: 0;\n    font-size: 0.8rem;\n    color: #64748b;\n  }\n}\n\n.test-score-value {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  .score {\n    font-size: 1.125rem;\n    font-weight: 700;\n    color: #2563eb;\n  }\n\n  .badge {\n    padding: 4px 8px;\n    border-radius: 12px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    \n    &.badge-strong {\n      background: #eff6ff;\n      color: #2563eb;\n    }\n  }\n}\n\n.action-buttons {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  justify-content: flex-end;\n\n  .save-btn {\n    background: #2563eb;\n    color: white;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 8px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background 0.2s;\n\n    &:hover:not(:disabled) {\n      background: #1d4ed8;\n    }\n\n    &:disabled {\n      opacity: 0.7;\n      cursor: not-allowed;\n    }\n  }\n}\n\n.success-message {\n  color: #16a34a;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\n.error-message {\n  color: #dc2626;\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .profile-content-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.preferences-section {\n  h3 {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    margin: 0 0 12px;\n  }\n}\n\n.pills-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.pill-btn {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 6px 16px;\n  font-size: 0.875rem;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n\n  &:hover {\n    border-color: #cbd5e1;\n    background: #f8fafc;\n  }\n\n  &.active {\n    background: #eff6ff;\n    border-color: #3b82f6;\n    color: #1d4ed8;\n    font-weight: 500;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/pages/dashboard/profile/profile.ts", lineNumber: 14 }); })();
