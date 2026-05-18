import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferred-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preferred-countries.html',
  styleUrl: './preferred-countries.scss',
})
export class PreferredCountriesComponent {
  countries = [
    {
      flag: '🇺🇸',
      name: 'USA',
      universities: 48,
      progress: 80,
      active: true
    },
    {
      flag: '🇬🇧',
      name: 'UK',
      universities: 36,
      progress: 60,
      active: false
    },
    {
      flag: '🇨🇦',
      name: 'Canada',
      universities: 22,
      progress: 35,
      active: false
    },
    {
      flag: '🇩🇪',
      name: 'Germany',
      universities: 19,
      progress: 30,
      active: false
    }
  ];

  setActive(index: number) {
    this.countries.forEach((c, i) => c.active = i === index);
  }
}
