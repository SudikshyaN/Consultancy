import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { signal } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../services/university.service";
const _forTrack0 = ($index, $item) => $item._id || $item.id || $item.name;
function AdminUniversitiesComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage());
} }
function AdminUniversitiesComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.successMessage());
} }
function AdminUniversitiesComponent_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 15);
} if (rf & 2) {
    const country_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r2);
} }
function AdminUniversitiesComponent_For_36_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function AdminUniversitiesComponent_For_36_Template_button_click_0_listener() { const country_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectCountry(country_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.selectedCountry === country_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", country_r4, " ");
} }
function AdminUniversitiesComponent_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 36);
    i0.ɵɵtext(2, "Loading universities...");
    i0.ɵɵelementEnd()();
} }
function AdminUniversitiesComponent_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("No ", ctx_r0.selectedCountry, " universities found.");
} }
function AdminUniversitiesComponent_Conditional_53_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "button", 37);
    i0.ɵɵlistener("click", function AdminUniversitiesComponent_Conditional_53_For_1_Template_button_click_2_listener() { const university_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.editUniversity(university_r6)); });
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "span", 38);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "button", 39);
    i0.ɵɵlistener("click", function AdminUniversitiesComponent_Conditional_53_For_1_Template_button_click_15_listener() { const university_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteUniversity(university_r6)); });
    i0.ɵɵtext(16, " Delete ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const university_r6 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(university_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(university_r6.city || "City not set");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(university_r6.country);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(university_r6.programs.length);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("inactive", !university_r6.active);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", university_r6.active ? "Active" : "Hidden", " ");
} }
function AdminUniversitiesComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AdminUniversitiesComponent_Conditional_53_For_1_Template, 17, 7, "tr", null, _forTrack0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r0.universities());
} }
function AdminUniversitiesComponent_For_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(country_r7);
} }
function AdminUniversitiesComponent_For_99_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 40)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 10);
    i0.ɵɵlistener("click", function AdminUniversitiesComponent_For_99_Template_button_click_4_listener() { const ɵ$index_212_r9 = i0.ɵɵrestoreView(_r8).$index; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.removeProgram(ɵ$index_212_r9)); });
    i0.ɵɵtext(5, "Remove");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "label")(7, "span");
    i0.ɵɵtext(8, "Program name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label")(11, "span");
    i0.ɵɵtext(12, "Fields");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "input", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "label")(15, "span");
    i0.ɵɵtext(16, "Accepted degrees");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 44)(19, "label")(20, "span");
    i0.ɵɵtext(21, "Min GPA");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "input", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "label")(24, "span");
    i0.ɵɵtext(25, "IELTS");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "label")(28, "span");
    i0.ɵɵtext(29, "TOEFL");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "label")(32, "span");
    i0.ɵɵtext(33, "GMAT");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "input", 48);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ɵ$index_212_r9 = ctx.$index;
    i0.ɵɵproperty("formGroupName", ɵ$index_212_r9);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Program ", ɵ$index_212_r9 + 1);
} }
export class AdminUniversitiesComponent {
    fb;
    universityService;
    countryOptions = ['USA', 'UK', 'India'];
    universities = signal([], ...(ngDevMode ? [{ debugName: "universities" }] : /* istanbul ignore next */ []));
    selectedCountry = 'USA';
    selectedUniversity = signal(null, ...(ngDevMode ? [{ debugName: "selectedUniversity" }] : /* istanbul ignore next */ []));
    isViewOnly = signal(false, ...(ngDevMode ? [{ debugName: "isViewOnly" }] : /* istanbul ignore next */ []));
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []));
    isSaving = signal(false, ...(ngDevMode ? [{ debugName: "isSaving" }] : /* istanbul ignore next */ []));
    errorMessage = signal('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : /* istanbul ignore next */ []));
    successMessage = signal('', ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    universityForm;
    constructor(fb, universityService) {
        this.fb = fb;
        this.universityService = universityService;
        this.universityForm = this.fb.group({
            name: ['', Validators.required],
            country: [this.selectedCountry, Validators.required],
            city: [''],
            website: [''],
            tuitionRange: [''],
            tags: [''],
            active: [true],
            programs: this.fb.array([this.createProgramGroup()]),
        });
    }
    ngOnInit() {
        this.loadUniversities();
    }
    get programs() {
        return this.universityForm.get('programs');
    }
    loadUniversities() {
        this.isLoading.set(true);
        this.errorMessage.set('');
        this.universityService.listAdminUniversities(this.selectedCountry).pipe(finalize(() => {
            this.isLoading.set(false);
        })).subscribe({
            next: (res) => {
                this.universities.set(res.universities);
            },
            error: (err) => {
                this.errorMessage.set(err.error?.message || 'Unable to load universities.');
            },
        });
    }
    addProgram() {
        this.programs.push(this.createProgramGroup());
    }
    selectCountry(country) {
        this.selectedCountry = country;
        this.resetForm();
        this.loadUniversities();
    }
    selectCountryFromInput(country) {
        const match = this.countryOptions.find((option) => option.toLowerCase() === country.trim().toLowerCase());
        if (match) {
            this.selectCountry(match);
        }
    }
    removeProgram(index) {
        if (this.programs.length === 1) {
            return;
        }
        this.programs.removeAt(index);
    }
    viewUniversity(university) {
        this.populateForm(university);
        this.selectedUniversity.set(university);
        this.isViewOnly.set(true);
        this.universityForm.disable();
    }
    editUniversity(university) {
        this.populateForm(university);
        this.selectedUniversity.set(university);
        this.isViewOnly.set(false);
        this.universityForm.enable();
    }
    populateForm(university) {
        this.programs.clear();
        const programs = university.programs?.length ? university.programs : [this.emptyProgram()];
        programs.forEach((program) => this.programs.push(this.createProgramGroup(program)));
        this.universityForm.patchValue({
            name: university.name,
            country: university.country,
            city: university.city,
            website: university.website,
            tuitionRange: university.tuitionRange,
            tags: (university.tags || []).join(', '),
            active: university.active,
        });
        this.errorMessage.set('');
        this.successMessage.set('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    resetForm() {
        this.selectedUniversity.set(null);
        this.isViewOnly.set(false);
        this.universityForm.enable();
        this.programs.clear();
        this.programs.push(this.createProgramGroup());
        this.universityForm.reset({
            name: '',
            country: this.selectedCountry,
            city: '',
            website: '',
            tuitionRange: '',
            tags: '',
            active: true,
        });
        this.errorMessage.set('');
        this.successMessage.set('');
    }
    saveUniversity() {
        const name = this.universityForm.get('name');
        const country = this.universityForm.get('country');
        if (name?.invalid || country?.invalid) {
            this.universityForm.markAllAsTouched();
            this.errorMessage.set('Please fill in the university name and country.');
            return;
        }
        this.isSaving.set(true);
        this.errorMessage.set('');
        this.successMessage.set('');
        const payload = this.buildPayload();
        const id = this.selectedUniversity()?._id || this.selectedUniversity()?.id;
        const request = id
            ? this.universityService.updateUniversity(id, payload)
            : this.universityService.createUniversity(payload);
        request.pipe(finalize(() => this.isSaving.set(false))).subscribe({
            next: (res) => {
                this.successMessage.set(res.message);
                this.selectedCountry = res.university.country || payload.country || this.selectedCountry;
                this.resetForm();
                this.loadUniversities();
            },
            error: (err) => {
                this.errorMessage.set(err.error?.message || 'Unable to save university.');
            },
        });
    }
    deleteUniversity(university) {
        const id = university._id || university.id;
        if (!id || !confirm(`Are you sure you want to delete ${university.name}?`)) {
            return;
        }
        this.universityService.deleteUniversity(id).subscribe({
            next: (res) => {
                this.successMessage.set(res.message || 'University deleted');
                this.loadUniversities();
                if ((this.selectedUniversity()?._id || this.selectedUniversity()?.id) === id) {
                    this.resetForm();
                }
            },
            error: (err) => {
                this.errorMessage.set(err.error?.message || 'Unable to delete university.');
            },
        });
    }
    createProgramGroup(program = this.emptyProgram()) {
        return this.fb.group({
            name: [program.name],
            fields: [(program.fields || []).join(', ')],
            degrees: [(program.degrees || []).join(', ')],
            minGpa: [program.minGpa ?? null],
            minIelts: [program.minIelts ?? null],
            minToefl: [program.minToefl ?? null],
            minGmat: [program.minGmat ?? null],
        });
    }
    emptyProgram() {
        return {
            name: '',
            fields: [],
            degrees: [],
            minGpa: null,
            minIelts: null,
            minToefl: null,
            minGmat: null,
        };
    }
    buildPayload() {
        const raw = this.universityForm.getRawValue();
        return {
            name: raw.name,
            country: raw.country,
            city: raw.city,
            website: raw.website,
            tuitionRange: raw.tuitionRange,
            active: raw.active,
            tags: this.toList(raw.tags),
            programs: raw.programs
                .filter((program) => String(program.name || '').trim())
                .map((program) => ({
                name: String(program.name || '').trim(),
                fields: this.toList(program.fields),
                degrees: this.toList(program.degrees),
                minGpa: this.toNumber(program.minGpa),
                minIelts: this.toNumber(program.minIelts),
                minToefl: this.toNumber(program.minToefl),
                minGmat: this.toNumber(program.minGmat),
            })),
        };
    }
    toList(value) {
        return String(value || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);
    }
    toNumber(value) {
        if (value === '' || value === null || value === undefined)
            return null;
        const numberValue = Number(value);
        return Number.isFinite(numberValue) ? numberValue : null;
    }
    static ɵfac = function AdminUniversitiesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminUniversitiesComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.UniversityService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminUniversitiesComponent, selectors: [["app-admin-universities"]], decls: 105, vars: 11, consts: [[1, "admin-universities-page"], [1, "admin-hero"], [1, "eyebrow"], [1, "hero-copy"], [1, "hero-stats"], [1, "alert", "error"], [1, "alert", "success"], [1, "admin-grid"], [1, "list-panel"], [1, "panel-header"], ["type", "button", 3, "click"], [1, "country-toolbar"], [1, "country-search"], ["type", "text", "list", "admin-country-options", "placeholder", "Search USA, UK, India", 3, "change", "value"], ["id", "admin-country-options"], [3, "value"], ["aria-label", "Country filters", 1, "country-pills"], ["type", "button", 3, "active"], [1, "table-wrap"], [1, "editor-panel", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["type", "text", "formControlName", "name", "placeholder", "Arizona State University"], ["formControlName", "country"], ["type", "text", "formControlName", "city", "placeholder", "Tempe, Arizona"], ["type", "text", "formControlName", "tuitionRange", "placeholder", "USD 32k-38k / year"], [1, "full"], ["type", "url", "formControlName", "website", "placeholder", "https://www.example.edu"], ["type", "text", "formControlName", "tags", "placeholder", "STEM, Scholarships, Research"], [1, "switch-row"], ["type", "checkbox", "formControlName", "active"], [1, "programs-header"], ["formArrayName", "programs", 1, "program-list"], [1, "program-card", 3, "formGroupName"], [1, "form-actions"], ["type", "button", 1, "secondary", 3, "click"], ["type", "submit", 1, "primary", 3, "disabled"], ["colspan", "5", 1, "empty-row"], ["type", "button", 1, "name-button", 3, "click"], [1, "status"], ["type", "button", 1, "ghost-danger", 3, "click"], [1, "program-card-header"], ["type", "text", "formControlName", "name", "placeholder", "MS Computer Science"], ["type", "text", "formControlName", "fields", "placeholder", "Computer Science, Data Science"], ["type", "text", "formControlName", "degrees", "placeholder", "bachelor, undergraduate"], [1, "score-grid"], ["type", "number", "step", "0.01", "formControlName", "minGpa"], ["type", "number", "step", "0.5", "formControlName", "minIelts"], ["type", "number", "formControlName", "minToefl"], ["type", "number", "formControlName", "minGmat"]], template: function AdminUniversitiesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "Catalog manager");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Universities");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 3);
            i0.ɵɵtext(8, "Select a country to manage the university data used by student recommendations.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4)(10, "span");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "small");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(14, AdminUniversitiesComponent_Conditional_14_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(15, AdminUniversitiesComponent_Conditional_15_Template, 2, 1, "p", 6);
            i0.ɵɵelementStart(16, "div", 7)(17, "section", 8)(18, "div", 9)(19, "div")(20, "h2");
            i0.ɵɵtext(21, "University list");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "p");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "button", 10);
            i0.ɵɵlistener("click", function AdminUniversitiesComponent_Template_button_click_24_listener() { return ctx.resetForm(); });
            i0.ɵɵtext(25, "New");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 11)(27, "label", 12)(28, "span");
            i0.ɵɵtext(29, "Search by country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "input", 13);
            i0.ɵɵlistener("change", function AdminUniversitiesComponent_Template_input_change_30_listener($event) { return ctx.selectCountryFromInput($event.target.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "datalist", 14);
            i0.ɵɵrepeaterCreate(32, AdminUniversitiesComponent_For_33_Template, 1, 1, "option", 15, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 16);
            i0.ɵɵrepeaterCreate(35, AdminUniversitiesComponent_For_36_Template, 2, 3, "button", 17, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 18)(38, "table")(39, "thead")(40, "tr")(41, "th");
            i0.ɵɵtext(42, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "th");
            i0.ɵɵtext(44, "Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "th");
            i0.ɵɵtext(46, "Programs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "th");
            i0.ɵɵtext(48, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "th");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "tbody");
            i0.ɵɵconditionalCreate(51, AdminUniversitiesComponent_Conditional_51_Template, 3, 0, "tr")(52, AdminUniversitiesComponent_Conditional_52_Template, 3, 1, "tr")(53, AdminUniversitiesComponent_Conditional_53_Template, 2, 0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(54, "form", 19);
            i0.ɵɵlistener("ngSubmit", function AdminUniversitiesComponent_Template_form_ngSubmit_54_listener() { return ctx.saveUniversity(); });
            i0.ɵɵelementStart(55, "div", 9)(56, "div")(57, "h2");
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "p");
            i0.ɵɵtext(60, "Program rules power profile-based matching.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "div", 20)(62, "label")(63, "span");
            i0.ɵɵtext(64, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(65, "input", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "label")(67, "span");
            i0.ɵɵtext(68, "Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "select", 22);
            i0.ɵɵrepeaterCreate(70, AdminUniversitiesComponent_For_71_Template, 2, 2, "option", 15, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "label")(73, "span");
            i0.ɵɵtext(74, "City");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(75, "input", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "label")(77, "span");
            i0.ɵɵtext(78, "Tuition range");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(79, "input", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "label", 25)(81, "span");
            i0.ɵɵtext(82, "Website");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(83, "input", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "label", 25)(85, "span");
            i0.ɵɵtext(86, "Tags");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(87, "input", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "label", 28);
            i0.ɵɵelement(89, "input", 29);
            i0.ɵɵelementStart(90, "span");
            i0.ɵɵtext(91, "Visible in recommendations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(92, "div", 30)(93, "h3");
            i0.ɵɵtext(94, "Programs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "button", 10);
            i0.ɵɵlistener("click", function AdminUniversitiesComponent_Template_button_click_95_listener() { return ctx.addProgram(); });
            i0.ɵɵtext(96, "Add program");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 31);
            i0.ɵɵrepeaterCreate(98, AdminUniversitiesComponent_For_99_Template, 35, 2, "div", 32, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "div", 33)(101, "button", 34);
            i0.ɵɵlistener("click", function AdminUniversitiesComponent_Template_button_click_101_listener() { return ctx.resetForm(); });
            i0.ɵɵtext(102, "Clear");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "button", 35);
            i0.ɵɵtext(104);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.universities().length);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.selectedCountry, " universities");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMessage() ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successMessage() ? 15 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.isLoading() ? "Loading catalog..." : "Click a row to edit details.");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("value", ctx.selectedCountry);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.countryOptions);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.countryOptions);
            i0.ɵɵadvance(16);
            i0.ɵɵconditional(ctx.isLoading() ? 51 : ctx.universities().length === 0 ? 52 : 53);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.universityForm);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.selectedUniversity() ? "Edit university" : "Add university");
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.countryOptions);
            i0.ɵɵadvance(28);
            i0.ɵɵrepeater(ctx.programs.controls);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.isSaving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isSaving() ? "Saving..." : ctx.selectedUniversity() ? "Save changes" : "Create university", " ");
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: [".admin-universities-page[_ngcontent-%COMP%] {\n  background: #f6f7fb;\n  color: #111827;\n  min-height: 100vh;\n  padding: 32px;\n}\n\n.admin-hero[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  padding: 28px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin: 0 0 8px;\n  text-transform: uppercase;\n}\n\n.admin-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  letter-spacing: 0;\n  line-height: 1;\n  margin: 0;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 10px 0 0;\n}\n\n.hero-stats[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.hero-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 900;\n}\n\n.hero-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 700;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 700;\n  margin: 0 0 14px;\n  padding: 12px 14px;\n}\n\n.alert.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.alert.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: minmax(0, 1.15fr) minmax(420px, 0.85fr);\n}\n\n.list-panel[_ngcontent-%COMP%], \n.editor-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 22px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 6px 0 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 800;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.programs-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #ffffff;\n  padding: 10px 14px;\n}\n\n.country-toolbar[_ngcontent-%COMP%] {\n  align-items: end;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  display: grid;\n  gap: 14px;\n  grid-template-columns: minmax(240px, 1fr) auto;\n  margin-bottom: 18px;\n  padding: 14px;\n}\n\n.country-search[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.country-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.country-pills[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dbe3ee;\n  color: #334155;\n  padding: 10px 14px;\n}\n\n.country-pills[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  min-width: 720px;\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eef2f7;\n  padding: 14px 10px;\n  text-align: left;\n  vertical-align: middle;\n}\n\nth[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.76rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.name-button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #111827;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0;\n  text-align: left;\n}\n\n.name-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n\n.status[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-radius: 999px;\n  color: #166534;\n  display: inline-flex;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 6px 10px;\n}\n\n.status.inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.ghost-danger[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #be123c;\n  padding: 9px 12px;\n}\n\n.empty-row[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 700;\n  text-align: center;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #dbe3ee;\n  border-radius: 8px;\n  color: #111827;\n  font: inherit;\n  min-height: 44px;\n  padding: 10px 12px;\n}\n\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  outline: 3px solid rgba(37, 99, 235, 0.14);\n}\n\n.switch-row[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  flex-direction: row;\n  margin: 16px 0;\n  padding: 12px;\n}\n\n.switch-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: auto;\n}\n\n.programs-header[_ngcontent-%COMP%], \n.program-card-header[_ngcontent-%COMP%], \n.form-actions[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.programs-header[_ngcontent-%COMP%] {\n  border-top: 1px solid #eef2f7;\n  margin-top: 18px;\n  padding-top: 18px;\n}\n\n.programs-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.program-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  margin-top: 14px;\n}\n\n.program-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  display: grid;\n  gap: 12px;\n  padding: 16px;\n}\n\n.program-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #be123c;\n  padding: 0;\n}\n\n.score-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  border-top: 1px solid #eef2f7;\n  gap: 12px;\n  margin-top: 18px;\n  padding-top: 18px;\n}\n\n.secondary[_ngcontent-%COMP%], \n.primary[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n\n.secondary[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n}\n\n.primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #ffffff;\n}\n\n.primary[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.65;\n}\n\n@media (max-width: 1200px) {\n  .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .admin-universities-page[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n\n  .admin-hero[_ngcontent-%COMP%], \n   .panel-header[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .form-grid[_ngcontent-%COMP%], \n   .score-grid[_ngcontent-%COMP%], \n   .country-toolbar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminUniversitiesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-universities', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<section class=\"admin-universities-page\">\n  <div class=\"admin-hero\">\n    <div>\n      <p class=\"eyebrow\">Catalog manager</p>\n      <h1>Universities</h1>\n      <p class=\"hero-copy\">Select a country to manage the university data used by student recommendations.</p>\n    </div>\n\n    <div class=\"hero-stats\">\n      <span>{{ universities().length }}</span>\n      <small>{{ selectedCountry }} universities</small>\n    </div>\n  </div>\n\n  @if (errorMessage()) {\n    <p class=\"alert error\">{{ errorMessage() }}</p>\n  }\n\n  @if (successMessage()) {\n    <p class=\"alert success\">{{ successMessage() }}</p>\n  }\n\n  <div class=\"admin-grid\">\n    <section class=\"list-panel\">\n      <div class=\"panel-header\">\n        <div>\n          <h2>University list</h2>\n          <p>{{ isLoading() ? 'Loading catalog...' : 'Click a row to edit details.' }}</p>\n        </div>\n        <button type=\"button\" (click)=\"resetForm()\">New</button>\n      </div>\n\n      <div class=\"country-toolbar\">\n        <label class=\"country-search\">\n          <span>Search by country</span>\n          <input\n            type=\"text\"\n            list=\"admin-country-options\"\n            [value]=\"selectedCountry\"\n            (change)=\"selectCountryFromInput($any($event.target).value)\"\n            placeholder=\"Search USA, UK, India\"\n          />\n          <datalist id=\"admin-country-options\">\n            @for (country of countryOptions; track country) {\n              <option [value]=\"country\"></option>\n            }\n          </datalist>\n        </label>\n\n        <div class=\"country-pills\" aria-label=\"Country filters\">\n          @for (country of countryOptions; track country) {\n            <button\n              type=\"button\"\n              [class.active]=\"selectedCountry === country\"\n              (click)=\"selectCountry(country)\"\n            >\n              {{ country }}\n            </button>\n          }\n        </div>\n      </div>\n\n      <div class=\"table-wrap\">\n        <table>\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Country</th>\n              <th>Programs</th>\n              <th>Status</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            @if (isLoading()) {\n              <tr>\n                <td colspan=\"5\" class=\"empty-row\">Loading universities...</td>\n              </tr>\n            } @else if (universities().length === 0) {\n              <tr>\n                <td colspan=\"5\" class=\"empty-row\">No {{ selectedCountry }} universities found.</td>\n              </tr>\n            } @else {\n              @for (university of universities(); track university._id || university.id || university.name) {\n                <tr>\n                  <td>\n                    <button type=\"button\" class=\"name-button\" (click)=\"editUniversity(university)\">\n                      <strong>{{ university.name }}</strong>\n                      <span>{{ university.city || 'City not set' }}</span>\n                    </button>\n                  </td>\n                  <td>{{ university.country }}</td>\n                  <td>{{ university.programs.length }}</td>\n                  <td>\n                    <span class=\"status\" [class.inactive]=\"!university.active\">\n                      {{ university.active ? 'Active' : 'Hidden' }}\n                    </span>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"ghost-danger\" (click)=\"deleteUniversity(university)\">\n                      Delete\n                    </button>\n                  </td>\n                </tr>\n              }\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n\n    <form class=\"editor-panel\" [formGroup]=\"universityForm\" (ngSubmit)=\"saveUniversity()\">\n      <div class=\"panel-header\">\n        <div>\n          <h2>{{ selectedUniversity() ? 'Edit university' : 'Add university' }}</h2>\n          <p>Program rules power profile-based matching.</p>\n        </div>\n      </div>\n\n      <div class=\"form-grid\">\n        <label>\n          <span>Name</span>\n          <input type=\"text\" formControlName=\"name\" placeholder=\"Arizona State University\" />\n        </label>\n\n        <label>\n          <span>Country</span>\n          <select formControlName=\"country\">\n            @for (country of countryOptions; track country) {\n              <option [value]=\"country\">{{ country }}</option>\n            }\n          </select>\n        </label>\n\n        <label>\n          <span>City</span>\n          <input type=\"text\" formControlName=\"city\" placeholder=\"Tempe, Arizona\" />\n        </label>\n\n        <label>\n          <span>Tuition range</span>\n          <input type=\"text\" formControlName=\"tuitionRange\" placeholder=\"USD 32k-38k / year\" />\n        </label>\n\n        <label class=\"full\">\n          <span>Website</span>\n          <input type=\"url\" formControlName=\"website\" placeholder=\"https://www.example.edu\" />\n        </label>\n\n        <label class=\"full\">\n          <span>Tags</span>\n          <input type=\"text\" formControlName=\"tags\" placeholder=\"STEM, Scholarships, Research\" />\n        </label>\n      </div>\n\n      <label class=\"switch-row\">\n        <input type=\"checkbox\" formControlName=\"active\" />\n        <span>Visible in recommendations</span>\n      </label>\n\n      <div class=\"programs-header\">\n        <h3>Programs</h3>\n        <button type=\"button\" (click)=\"addProgram()\">Add program</button>\n      </div>\n\n      <div formArrayName=\"programs\" class=\"program-list\">\n        @for (program of programs.controls; track $index; let index = $index) {\n          <div class=\"program-card\" [formGroupName]=\"index\">\n            <div class=\"program-card-header\">\n              <strong>Program {{ index + 1 }}</strong>\n              <button type=\"button\" (click)=\"removeProgram(index)\">Remove</button>\n            </div>\n\n            <label>\n              <span>Program name</span>\n              <input type=\"text\" formControlName=\"name\" placeholder=\"MS Computer Science\" />\n            </label>\n\n            <label>\n              <span>Fields</span>\n              <input type=\"text\" formControlName=\"fields\" placeholder=\"Computer Science, Data Science\" />\n            </label>\n\n            <label>\n              <span>Accepted degrees</span>\n              <input type=\"text\" formControlName=\"degrees\" placeholder=\"bachelor, undergraduate\" />\n            </label>\n\n            <div class=\"score-grid\">\n              <label>\n                <span>Min GPA</span>\n                <input type=\"number\" step=\"0.01\" formControlName=\"minGpa\" />\n              </label>\n              <label>\n                <span>IELTS</span>\n                <input type=\"number\" step=\"0.5\" formControlName=\"minIelts\" />\n              </label>\n              <label>\n                <span>TOEFL</span>\n                <input type=\"number\" formControlName=\"minToefl\" />\n              </label>\n              <label>\n                <span>GMAT</span>\n                <input type=\"number\" formControlName=\"minGmat\" />\n              </label>\n            </div>\n          </div>\n        }\n      </div>\n\n      <div class=\"form-actions\">\n        <button type=\"button\" class=\"secondary\" (click)=\"resetForm()\">Clear</button>\n        <button type=\"submit\" class=\"primary\" [disabled]=\"isSaving()\">\n          {{ isSaving() ? 'Saving...' : selectedUniversity() ? 'Save changes' : 'Create university' }}\n        </button>\n      </div>\n    </form>\n  </div>\n</section>\n", styles: [".admin-universities-page {\n  background: #f6f7fb;\n  color: #111827;\n  min-height: 100vh;\n  padding: 32px;\n}\n\n.admin-hero {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  padding: 28px;\n}\n\n.eyebrow {\n  color: #2563eb;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin: 0 0 8px;\n  text-transform: uppercase;\n}\n\n.admin-hero h1 {\n  font-size: 2.2rem;\n  letter-spacing: 0;\n  line-height: 1;\n  margin: 0;\n}\n\n.hero-copy {\n  color: #64748b;\n  margin: 10px 0 0;\n}\n\n.hero-stats {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.hero-stats span {\n  font-size: 2.4rem;\n  font-weight: 900;\n}\n\n.hero-stats small {\n  color: #64748b;\n  font-weight: 700;\n}\n\n.alert {\n  border-radius: 8px;\n  font-weight: 700;\n  margin: 0 0 14px;\n  padding: 12px 14px;\n}\n\n.alert.error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.alert.success {\n  background: #dcfce7;\n  color: #166534;\n}\n\n.admin-grid {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: minmax(0, 1.15fr) minmax(420px, 0.85fr);\n}\n\n.list-panel,\n.editor-panel {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 22px;\n}\n\n.panel-header {\n  align-items: flex-start;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  font-size: 1.25rem;\n  margin: 0;\n}\n\n.panel-header p {\n  color: #64748b;\n  margin: 6px 0 0;\n}\n\nbutton {\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 800;\n}\n\n.panel-header button,\n.programs-header button {\n  background: #111827;\n  color: #ffffff;\n  padding: 10px 14px;\n}\n\n.country-toolbar {\n  align-items: end;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  display: grid;\n  gap: 14px;\n  grid-template-columns: minmax(240px, 1fr) auto;\n  margin-bottom: 18px;\n  padding: 14px;\n}\n\n.country-search {\n  margin: 0;\n}\n\n.country-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.country-pills button {\n  background: #ffffff;\n  border: 1px solid #dbe3ee;\n  color: #334155;\n  padding: 10px 14px;\n}\n\n.country-pills button.active {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #ffffff;\n}\n\n.table-wrap {\n  overflow-x: auto;\n}\n\ntable {\n  border-collapse: collapse;\n  min-width: 720px;\n  width: 100%;\n}\n\nth,\ntd {\n  border-bottom: 1px solid #eef2f7;\n  padding: 14px 10px;\n  text-align: left;\n  vertical-align: middle;\n}\n\nth {\n  color: #64748b;\n  font-size: 0.76rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.name-button {\n  background: transparent;\n  color: #111827;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0;\n  text-align: left;\n}\n\n.name-button span {\n  color: #64748b;\n  font-weight: 600;\n}\n\n.status {\n  background: #dcfce7;\n  border-radius: 999px;\n  color: #166534;\n  display: inline-flex;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 6px 10px;\n}\n\n.status.inactive {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.ghost-danger {\n  background: #fff1f2;\n  color: #be123c;\n  padding: 9px 12px;\n}\n\n.empty-row {\n  color: #64748b;\n  font-weight: 700;\n  text-align: center;\n}\n\n.form-grid {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\nlabel span {\n  color: #475569;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.full {\n  grid-column: 1 / -1;\n}\n\ninput,\nselect {\n  background: #f8fafc;\n  border: 1px solid #dbe3ee;\n  border-radius: 8px;\n  color: #111827;\n  font: inherit;\n  min-height: 44px;\n  padding: 10px 12px;\n}\n\ninput:focus,\nselect:focus {\n  border-color: #2563eb;\n  outline: 3px solid rgba(37, 99, 235, 0.14);\n}\n\n.switch-row {\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  flex-direction: row;\n  margin: 16px 0;\n  padding: 12px;\n}\n\n.switch-row input {\n  min-height: auto;\n}\n\n.programs-header,\n.program-card-header,\n.form-actions {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.programs-header {\n  border-top: 1px solid #eef2f7;\n  margin-top: 18px;\n  padding-top: 18px;\n}\n\n.programs-header h3 {\n  margin: 0;\n}\n\n.program-list {\n  display: grid;\n  gap: 14px;\n  margin-top: 14px;\n}\n\n.program-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  display: grid;\n  gap: 12px;\n  padding: 16px;\n}\n\n.program-card-header button {\n  background: transparent;\n  color: #be123c;\n  padding: 0;\n}\n\n.score-grid {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.form-actions {\n  border-top: 1px solid #eef2f7;\n  gap: 12px;\n  margin-top: 18px;\n  padding-top: 18px;\n}\n\n.secondary,\n.primary {\n  padding: 12px 16px;\n}\n\n.secondary {\n  background: #f1f5f9;\n  color: #334155;\n}\n\n.primary {\n  background: #2563eb;\n  color: #ffffff;\n}\n\n.primary:disabled {\n  cursor: wait;\n  opacity: 0.65;\n}\n\n@media (max-width: 1200px) {\n  .admin-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 700px) {\n  .admin-universities-page {\n    padding: 18px;\n  }\n\n  .admin-hero,\n  .panel-header,\n  .form-actions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .form-grid,\n  .score-grid,\n  .country-toolbar {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.UniversityService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminUniversitiesComponent, { className: "AdminUniversitiesComponent", filePath: "src/app/pages/admin/universities/admin-universities.ts", lineNumber: 15 }); })();
