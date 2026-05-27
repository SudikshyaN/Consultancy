import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { UniversityService } from '../../../services/university.service';
import type { University, UniversityProgram } from '../../../services/university.connector';
import { signal } from '@angular/core';
@Component({
  selector: 'app-admin-universities',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-universities.html',
  styleUrl: './admin-universities.scss'
})
export class AdminUniversitiesComponent implements OnInit {
  protected readonly countryOptions = ['USA', 'UK', 'Japan'];
  protected universities = signal<University[]>([]);
  protected selectedCountry = 'USA';
  protected selectedUniversity = signal<University | null>(null);
  protected isViewOnly = signal(false);
  protected isLoading = signal(false);
  protected isSaving = signal(false);
  protected isEditorOpen = signal(false);
  protected errorMessage = signal('');
  protected successMessage = signal('');
  protected universityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private universityService: UniversityService
  ) {
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

  ngOnInit(): void {
    this.loadUniversities();
  }

  get programs(): FormArray {
    return this.universityForm.get('programs') as FormArray;
  }

  loadUniversities(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.universityService.listAdminUniversities(this.selectedCountry).pipe(
      finalize(() => {
        this.isLoading.set(false);
      })
    ).subscribe({
      next: (res) => {
        this.universities.set(res.universities);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Unable to load universities.');
      },
    });
  }

  addProgram(): void {
    this.programs.push(this.createProgramGroup());
  }

  openCreateUniversity(): void {
    this.resetForm();
    this.isEditorOpen.set(true);
  }

  closeEditorModal(): void {
    this.isEditorOpen.set(false);
  }

  selectCountry(country: string): void {
    this.selectedCountry = country;
    this.resetForm();
    this.loadUniversities();
  }

  selectCountryFromInput(country: string): void {
    const match = this.countryOptions.find((option) => option.toLowerCase() === country.trim().toLowerCase());

    if (match) {
      this.selectCountry(match);
    }
  }

  removeProgram(index: number): void {
    if (this.programs.length === 1) {
      return;
    }

    this.programs.removeAt(index);
  }

  viewUniversity(university: University): void {
    this.populateForm(university);
    this.selectedUniversity.set(university);
    this.isViewOnly.set(true);
    this.universityForm.disable();
    this.isEditorOpen.set(true);
  }

  editUniversity(university: University): void {
    this.populateForm(university);
    this.selectedUniversity.set(university);
    this.isViewOnly.set(false);
    this.universityForm.enable();
    this.isEditorOpen.set(true);
  }

  private populateForm(university: University): void {
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
  }

  resetForm(): void {
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

  saveUniversity(): void {
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

    request.pipe(
      finalize(() => this.isSaving.set(false))
    ).subscribe({
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

  deleteUniversity(university: University): void {
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

  private createProgramGroup(program: UniversityProgram = this.emptyProgram()): FormGroup {
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

  private emptyProgram(): UniversityProgram {
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

  private buildPayload(): Partial<University> {
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
        .filter((program: any) => String(program.name || '').trim())
        .map((program: any) => ({
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

  private toList(value: string): string[] {
    return String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  private toNumber(value: unknown): number | null {
    if (value === '' || value === null || value === undefined) return null;
    const numberValue = Number(value);
    return Number.isFinite(numberValue) ? numberValue : null;
  }

}
