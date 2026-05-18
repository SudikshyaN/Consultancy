import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DestinationService } from '../../../services/destination.service';
import { Destination } from '../../../shared/data/destinations';

@Component({
  selector: 'app-dashboard-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-detail.html',
  styleUrl: './country-detail.scss'
})
export class DashboardCountryDetailComponent implements OnInit {
  protected country = signal<Destination | null>(null);
  protected isLoading = signal(true);
  protected error = signal('');
  protected expandedStepIndex = signal<number>(0);

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
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
      },
      error: (err) => {
        console.error('Error loading country details:', err);
        this.error.set('Failed to load country details.');
        this.isLoading.set(false);
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

  protected getTotalMonthlyCost(): number {
    const cb = this.country()?.costBreakdown;
    if (!cb) return 0;
    return (cb.rent || 0) + (cb.food || 0) + (cb.transport || 0) + (cb.bills || 0) + (cb.personal || 0);
  }

  protected getCostPercentage(value: number): number {
    const total = this.getTotalMonthlyCost();
    if (total === 0) return 0;
    return (value / total) * 100;
  }
}
