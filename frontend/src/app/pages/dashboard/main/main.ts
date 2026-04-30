import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardJourney, DashboardService } from '../../../services/dashboard.service';
import { ApplicationsComponent } from './applications/applications';
import { PreferredCountriesComponent } from './preferred-countries/preferred-countries';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [CommonModule, RouterModule, ApplicationsComponent, PreferredCountriesComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class DashboardMainComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  protected isLoading = false;
  protected errorMessage = '';
  protected journey: DashboardJourney = {
    activeIndex: 0,
    steps: [
      {
        key: 'profile',
        label: 'Complete profile',
        route: '/dashboard/profile',
        complete: false,
        meta: '0% complete',
        number: 1,
        state: 'active',
      },
      {
        key: 'explore',
        label: 'Explore & save unis',
        route: '/dashboard/wishlist',
        complete: false,
        meta: '0 saved',
        number: 2,
        state: 'upcoming',
      },
      {
        key: 'apply',
        label: 'Apply',
        route: '/dashboard/main',
        complete: false,
        meta: '0 applications',
        number: 3,
        state: 'upcoming',
      },
      {
        key: 'visa',
        label: 'Visa & travel',
        route: '/dashboard/main',
        complete: false,
        meta: 'Unlocks after acceptance',
        number: 4,
        state: 'upcoming',
      },
    ],
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isLoading = true;

    this.dashboardService.getOverview().subscribe({
      next: (response) => {
        this.journey = response.journey;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Showing saved dashboard preview while live data is unavailable.';
        this.isLoading = false;
      },
    });
  }
}
