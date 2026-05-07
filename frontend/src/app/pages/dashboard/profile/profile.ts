import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, AuthUser } from '../../../services/auth.services';
import { DashboardCard } from '../../../services/dashboard.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  profileForm!: FormGroup;
  user: AuthUser | null = null;
  isLoading = false;
  isSaving = false;
  successMessage = '';
  errorMessage = '';

  statCards: DashboardCard[] = [
    { title: 'Applications', value: 4, caption: '', icon: '📋', iconTone: 'blue' },
    { title: 'Preferred', value: 0, caption: '', icon: '🎫', iconTone: 'mint' },
    { title: 'Countries', value: 8, caption: '', icon: '🌍', iconTone: 'gold' },
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
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'South Korea', flag: '🇰🇷' }
  ];


  availableIntakeYears = ['2026', '2027'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadProfile();
  }

  initForm(): void {
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

  toggleSelection(field: string, value: string): void {
    const control = this.profileForm.get(field);
    if (!control) return;

    let currentSelection = [...(control.value || [])];
    const index = currentSelection.indexOf(value);

    if (index > -1) {
      currentSelection.splice(index, 1);
    } else {
      currentSelection.push(value);
    }

    control.setValue(currentSelection);
    this.profileForm.markAsDirty();
  }

  loadProfile(): void {
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
        } catch (e) {
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

  updateFormAndStats(user: AuthUser): void {
    if (!user) return;
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
      
      if (profile.preferredCountries) {
        this.statCards[1].value = profile.preferredCountries.length;
      }
    } catch (e) {
      console.error(e);
    }
  }

  onSubmit(): void {
    if (this.profileForm.invalid) return;

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
}
