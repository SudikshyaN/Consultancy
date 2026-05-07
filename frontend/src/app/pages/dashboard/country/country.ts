import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';
import { DESTINATIONS, Destination } from '../../../shared/data/destinations';
import { AuthService } from '../../../services/auth.services';

@Component({
  selector: 'app-dashboard-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class DashboardCountryComponent implements OnInit {
  protected readonly allCountries = signal<Destination[]>(DESTINATIONS);
  protected readonly savedSlugs = signal<Set<string>>(new Set());
  protected readonly isLoading = signal(false);
  protected readonly processingSlug = signal('');
  protected readonly errorMessage = signal('');

  constructor(
    private wishlistService: WishlistService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadPreferences();
  }

  protected isSelected(slug: string): boolean {
    return this.savedSlugs().has(slug);
  }

  protected toggleCountry(country: Destination): void {
    if (this.processingSlug()) return;

    this.processingSlug.set(country.slug);
    this.errorMessage.set('');

    const isCurrentlySelected = this.isSelected(country.slug);
    const request = isCurrentlySelected
      ? this.wishlistService.removeDestination(country.slug)
      : this.wishlistService.addDestination({
        slug: country.slug,
        name: country.name,
        visa: country.visa,
        flag: country.flag
      });

    request.subscribe({
      next: (res) => {
        const newSlugs = new Set(res.savedDestinations.map(d => d.slug));
        this.savedSlugs.set(newSlugs);

        
        this.authService.getProfile().subscribe();

        this.processingSlug.set('');
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Unable to update preferences.');
        this.processingSlug.set('');
      }
    });
  }

  private loadPreferences(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.wishlistService.listDestinations().subscribe({
      next: (res) => {
        const newSlugs = new Set(res.savedDestinations.map(d => d.slug));
        this.savedSlugs.set(newSlugs);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Unable to load preferences.');
        this.isLoading.set(false);
      }
    });
  }
}
