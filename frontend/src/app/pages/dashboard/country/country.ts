import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WishlistService } from '../../../services/wishlist.service';
import { Destination } from '../../../shared/data/destinations';
import { AuthService } from '../../../services/auth.services';
import { DestinationService } from '../../../services/destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-country',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class DashboardCountryComponent implements OnInit {
  protected readonly allCountries = signal<Destination[]>([]);
  protected readonly savedSlugs = signal<Set<string>>(new Set());
  protected readonly isLoading = signal(false);
  protected readonly processingSlug = signal('');
  protected readonly errorMessage = signal('');

  constructor(
    private wishlistService: WishlistService,
    private authService: AuthService,
    private destinationService: DestinationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCountries();
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

  protected viewDetails(event: Event, slug: string): void {
    event.stopPropagation(); // Prevent toggling selection
    this.router.navigate(['/dashboard/country', slug]);
  }

  private loadCountries(): void {
    this.isLoading.set(true);
    this.destinationService.listDestinations().subscribe({
      next: (res) => {
        this.allCountries.set(res.destinations);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Unable to load destinations.');
        this.isLoading.set(false);
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
