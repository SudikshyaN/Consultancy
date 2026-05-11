import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SavedDestination, WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-preferred-countries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preferred-countries.html',
  styleUrl: './preferred-countries.scss',
})
export class PreferredCountriesComponent implements OnInit {
  private wishlistService = inject(WishlistService);
  private router = inject(Router);
  
  countries: any[] = [];
  activeIndex = 0;

  ngOnInit(): void {
    this.loadPreferredCountries();
  }

  loadPreferredCountries(): void {
    this.wishlistService.listDestinations().subscribe({
      next: (res) => {
        this.mapPreferredCountries(res.savedDestinations);
      },
      error: (err) => {
        console.error('Error loading preferred countries:', err);
        this.countries = [];
      }
    });
  }

  private mapPreferredCountries(savedDestinations: SavedDestination[]): void {
    this.countries = savedDestinations.map((destination) => {
      return {
        name: destination.name,
        slug: destination.slug,
        flag: destination.flag || this.getEmojiFlag(destination.name),
        universities: Math.floor(Math.random() * 50) + 10,
        progress: Math.floor(Math.random() * 100),
        active: false
      };
    });

    if (this.countries.length > 0) {
      this.countries[0].active = true;
    }
  }

  getEmojiFlag(countryName: string): string {
    const flags: {[key: string]: string} = {
      'USA': '🇺🇸',
      'UK': '🇬🇧',
      'Australia': '🇦🇺',
      'Canada': '🇨🇦',
      'Germany': '🇩🇪',
      'Japan': '🇯🇵',
      'New Zealand': '🇳🇿',
      'South Korea': '🇰🇷'
    };
    return flags[countryName] || '🌍';
  }

  setActive(index: number) {
    this.activeIndex = index;
    this.countries.forEach((c, i) => c.active = i === index);
  }

  viewMore(): void {
    const activeCountry = this.countries[this.activeIndex];
    if (activeCountry && activeCountry.slug) {
      this.router.navigate(['/dashboard/country', activeCountry.slug]);
    }
  }
}
