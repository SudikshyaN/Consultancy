import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth.services';
import { DESTINATIONS } from '../../../../shared/data/destinations';

@Component({
  selector: 'app-preferred-countries',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preferred-countries.html',
  styleUrl: './preferred-countries.scss',
})
export class PreferredCountriesComponent implements OnInit {
  private authService = inject(AuthService);
  
  countries: any[] = [];
  activeIndex = 0;

  ngOnInit(): void {
    this.loadPreferredCountries();
  }

  loadPreferredCountries(): void {
    const user = this.authService.getUser();
    const preferredNames = user?.profile?.preferredCountries || [];
    
    // Map preferred names to destination data for flags
    this.countries = preferredNames.map((name: string) => {
      const dest = DESTINATIONS.find(d => d.name === name);
      return {
        name,
        flag: this.getEmojiFlag(name), // Fallback to emoji for main dashboard style
        universities: Math.floor(Math.random() * 50) + 10, // Mock data for now
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
}
