import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { University, UniversityProgram, UniversityService } from '../../../services/university.service';
import { signal } from '@angular/core';
@Component({
  selector: 'app-admin-universities',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-universities.html',
  styleUrl: './admin-universities.scss'
})
export class AdminUniversitiesComponent implements OnInit {
  protected readonly countryOptions = ['USA', 'UK', 'Canada'];
  protected universities: University[] = [];
  protected selectedCountry = 'USA';
  protected selectedUniversity: University | null = null;
  protected isLoading = signal(false);
  protected isSaving = false;
  protected errorMessage = '';
  protected successMessage = '';
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
    this.isLoading = signal(true);
    this.errorMessage = '';

    this.universityService.listAdminUniversities(this.selectedCountry).pipe(
      timeout(8000),
      finalize(() => {
        this.isLoading = signal(false);
      })
    ).subscribe({
      next: (res) => {
        this.universities = res.universities;
      },
      error: (err) => {
        this.errorMessage = err.name === 'TimeoutError'
          ? 'The university request timed out. Please check that the backend is running.'
          : err.error?.message || 'Unable to load universities.';
      },
    });
  }

  addProgram(): void {
    this.programs.push(this.createProgramGroup());
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

  editUniversity(university: University): void {
    this.selectedUniversity = university;
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
  }

  resetForm(): void {
    this.selectedUniversity = null;
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
  }

  saveUniversity(): void {
    if (this.universityForm.invalid) {
      this.universityForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = this.buildPayload();
    const id = this.selectedUniversity?._id || this.selectedUniversity?.id;
    const request = id
      ? this.universityService.updateUniversity(id, payload)
      : this.universityService.createUniversity(payload);

    request.subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.isSaving = false;
        this.resetForm();
        this.loadUniversities();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Unable to save university.';
        this.isSaving = false;
      },
    });
  }

  deleteUniversity(university: University): void {
    const id = university._id || university.id;

    if (!id) {
      return;
    }

    this.universityService.deleteUniversity(id).subscribe({
      next: () => {
        this.successMessage = 'University deleted';
        this.loadUniversities();
        if ((this.selectedUniversity?._id || this.selectedUniversity?.id) === id) {
          this.resetForm();
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Unable to delete university.';
      },
    });
  }

  private createProgramGroup(program: UniversityProgram = this.emptyProgram()): FormGroup {
    return this.fb.group({
      name: [program.name, Validators.required],
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

  private buildPayload(): University {
    const raw = this.universityForm.value;

    return {
      name: raw.name,
      country: raw.country,
      city: raw.city,
      website: raw.website,
      tuitionRange: raw.tuitionRange,
      active: raw.active,
      tags: this.toList(raw.tags),
      programs: raw.programs.map((program: any) => ({
        name: program.name,
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
    const numberValue = Number(value);

    return Number.isFinite(numberValue) && value !== '' && value !== null ? numberValue : null;
  }
}
