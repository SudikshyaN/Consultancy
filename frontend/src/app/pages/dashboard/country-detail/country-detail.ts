import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DestinationService } from '../../../services/destination.service';
import { Destination } from '../../../shared/data/destinations';
import { UniversityService } from '../../../services/university.service';
import { University } from '../../../services/university.connector';

@Component({
  selector: 'app-dashboard-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-detail.html',
  styleUrl: './country-detail.scss'
})
export class DashboardCountryDetailComponent implements OnInit {
  protected country = signal<Destination | null>(null);
  protected universities = signal<University[]>([]);
  protected universitiesLoading = signal(false);
  protected isLoading = signal(true);
  protected error = signal('');
  protected expandedStepIndex = signal<number>(0);

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.loadCountryDetails(slug);
      }
    });
  }

  private loadCountryDetails(slug: string): void {
    this.isLoading.set(true);
    this.destinationService.getDestinationBySlug(slug).subscribe({
      next: (res) => {
        this.country.set(res.destination);
        this.isLoading.set(false);
        this.loadUniversities(res.destination.name);
      },
      error: (err) => {
        console.error('Error loading country details:', err);
        this.error.set('Failed to load country details.');
        this.isLoading.set(false);
      }
    });
  }

  private loadUniversities(countryName: string): void {
    this.universitiesLoading.set(true);
    this.universityService.getByCountry(countryName).subscribe({
      next: (res) => {
        this.universities.set(res.universities || []);
        this.universitiesLoading.set(false);
      },
      error: () => {
        this.universities.set([]);
        this.universitiesLoading.set(false);
      }
    });
  }

  protected toggleStep(index: number): void {
    if (this.expandedStepIndex() === index) {
      this.expandedStepIndex.set(-1); // Collapse if already open
    } else {
      this.expandedStepIndex.set(index);
    }
  }

  protected getTotalMonthlyCost(): string {
    const cb = this.country()?.costBreakdown;
    if (!cb) return '0';
    
    let totalMin = 0;
    let totalMax = 0;
    
    const fields = [cb.rent, cb.food, cb.transport, cb.bills, cb.personal];
    for (const field of fields) {
      const [min, max] = this.getRangeBounds(field);
      totalMin += min;
      totalMax += max;
    }
    
    if (totalMin === 0 && totalMax === 0) return '0';
    if (totalMin === totalMax) return totalMin.toLocaleString();
    return `${totalMin.toLocaleString()}–${totalMax.toLocaleString()}`;
  }

  protected getCostPercentage(value: any): number {
    const cb = this.country()?.costBreakdown;
    if (!cb) return 0;
    
    let totalAvg = 0;
    const fields = [cb.rent, cb.food, cb.transport, cb.bills, cb.personal];
    for (const field of fields) {
      const [min, max] = this.getRangeBounds(field);
      totalAvg += (min + max) / 2;
    }
    
    if (totalAvg === 0) return 0;
    const [min, max] = this.getRangeBounds(value);
    const avg = (min + max) / 2;
    return (avg / totalAvg) * 100;
  }

  private getRangeBounds(value: any): [number, number] {
    if (value === null || value === undefined) return [0, 0];
    if (typeof value === 'number') return [value, value];
    
    const cleanStr = String(value).replace(/,/g, '');
    const matches = cleanStr.match(/\d+(\.\d+)?/g);
    if (!matches || matches.length === 0) return [0, 0];
    
    const numbers = matches.map(Number);
    if (numbers.length === 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[1]];
  }

  protected getCurrencySymbol(): string {
    const name = this.country()?.name?.toLowerCase() || '';
    if (name === 'usa' || name === 'canada') return '$';
    if (name === 'uk') return '£';
    if (name === 'australia' || name === 'new zealand') return 'A$';
    if (name === 'japan') return '¥';
    if (name === 'south korea') return '₩';
    if (name === 'germany') return '€';
    if (name === 'singapore') return 'S$';
    return '$';
  }
}
