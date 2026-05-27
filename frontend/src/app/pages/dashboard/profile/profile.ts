import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, AuthUser } from '../../../services/auth.services';
import { DashboardCard } from '../../../services/dashboard.service';
import { DestinationService } from '../../../services/destination.service';
import { WishlistService } from '../../../services/wishlist.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private destinationService = inject(DestinationService);
  private wishlistService = inject(WishlistService);

  profileForm!: FormGroup;
  user: AuthUser | null = null;
  isLoading = false;
  isSaving = false;
  successMessage = '';
  errorMessage = '';

  statCards: DashboardCard[] = [
    { title: 'GPA', value: '0.0', caption: '', icon: '⭐', iconTone: 'lavender' }
  ];

  availableStudyFields = [
    'Artificial Intelligence', 'Data Science', 'Machine Learning',
    'Cybersecurity', 'Cloud Computing', 'Robotics', 'Bioinformatics',
    'HCI', 'NLP', 'Computer Vision'
  ];

  availableCountries: { name: string; flag: string }[] = [];
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
    const current: string[] = [...(control.value || [])];
    const idx = current.indexOf(value);
    if (idx > -1) {
      current.splice(idx, 1);
    } else {
      current.push(value);
    }
    control.setValue(current);
    this.profileForm.markAsDirty();
  }

  loadProfile(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isLoading = true;
    this.authService.getProfile().subscribe({
      next: (res) => {
        if (res?.user) {
          this.user = res.user;
          this.patchForm(this.user);
          this.loadCountriesAndSyncWishlist(this.user);
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load profile';
        this.isLoading = false;
      }
    });
  }

  /**
   * Loads all available destinations as country pills, then merges
   * THREE sources to determine which ones should be pre-selected:
   *  1. user.profile.preferredCountries (saved in profile)
   *  2. user.savedDestinations (wishlist items already in the auth response)
   *  3. wishlist API response (live wishlist data)
   */
  loadCountriesAndSyncWishlist(user: AuthUser): void {
    forkJoin({
      destinations: this.destinationService.listDestinations().pipe(
        catchError(() => of({ destinations: [] as any[] }))
      ),
      wishlist: this.wishlistService.listDestinations().pipe(
        catchError(() => of({ savedDestinations: [] as any[] }))
      ),
    }).subscribe(({ destinations, wishlist }) => {
      // ── Build complete pill list from ALL available destinations ──
      const allCountries = (destinations.destinations as any[]).map(d => ({
        name: d.name as string,
        flag: this.getEmojiFlag(d.name),
      }));

      // ── Collect names from every source ──
      const selected = new Set<string>(
        (this.profileForm.get('preferredCountries')?.value as string[] || [])
          .map((n: string) => n.toLowerCase())
      );

      // Source 1 – profile.preferredCountries (already patched into form above)
      // Source 2 – user.savedDestinations from /api/auth/me response
      for (const d of (user.savedDestinations || [])) {
        selected.add(d.name.toLowerCase());
      }

      // Source 3 – live wishlist API
      for (const d of (wishlist.savedDestinations as any[])) {
        selected.add((d.name as string).toLowerCase());
      }

      // ── Resolve back to proper-case names using the destinations list ──
      const resolvedNames: string[] = [];
      for (const dest of allCountries) {
        if (selected.has(dest.name.toLowerCase())) {
          resolvedNames.push(dest.name);
        }
      }
      // Keep any custom names that weren't in the destinations list
      for (const lc of selected) {
        if (!allCountries.some(c => c.name.toLowerCase() === lc)) {
          // Capitalize first letter of each word for display
          const display = lc.replace(/\b\w/g, ch => ch.toUpperCase());
          resolvedNames.push(display);
          allCountries.push({ name: display, flag: this.getEmojiFlag(display) });
        }
      }

      this.profileForm.get('preferredCountries')?.setValue(resolvedNames);
      this.availableCountries = allCountries;
    });
  }

  getEmojiFlag(countryName: string): string {
    const flags: { [key: string]: string } = {
      'USA': '🇺🇸',
      'UK': '🇬🇧',
      'Australia': '🇦🇺',
      'Canada': '🇨🇦',
      'Germany': '🇩🇪',
      'Japan': '🇯🇵',
      'New Zealand': '🇳🇿',
      'South Korea': '🇰🇷',
      'France': '🇫🇷',
      'Netherlands': '🇳🇱',
      'Singapore': '🇸🇬',
      'Sweden': '🇸🇪',
      'Ireland': '🇮🇪',
      'China': '🇨🇳',
      'Italy': '🇮🇹',
      'Spain': '🇪🇸',
    };
    return flags[countryName] || '🌍';
  }

  patchForm(user: AuthUser): void {
    if (!user) return;
    const profile = user.profile || {};
    try {
      this.profileForm.patchValue({
        name: user.name || '',
        email: user.email || '',
        dob: profile['dob'] || '',
        phone: profile['phone'] || '',
        nationality: profile['nationality'] || '',
        city: profile['city'] || '',
        about: profile['about'] || '',
        degree: profile['degree'] || '',
        gpa: profile['gpa'] || '',
        university: profile['university'] || '',
        graduationYear: profile['graduationYear'] || '',
        ielts: profile['ielts'] || '',
        gmat: profile['gmat'] || '',
        toefl: profile['toefl'] || '',
        studyFields: profile['studyFields'] || [],
        preferredCountries: profile['preferredCountries'] || [],
        intakeYear: profile['intakeYear'] || []
      });
      if (profile['gpa']) {
        this.statCards[0].value = profile['gpa'];
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Keep updateFormAndStats as an alias so nothing else breaks
  updateFormAndStats(user: AuthUser): void {
    this.patchForm(user);
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
        if (this.user.profile?.['gpa']) {
          this.statCards[0].value = this.user.profile['gpa'];
        }
        this.loadCountriesAndSyncWishlist(this.user);
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
