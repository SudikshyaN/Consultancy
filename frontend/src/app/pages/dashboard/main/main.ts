import { CommonModule } from '@angular/common';
import { Component, PLATFORM_ID, inject, signal, afterNextRender } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications/applications';
import { WishlistService, SavedDestination } from '../../../services/wishlist.service';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [CommonModule, RouterModule, ApplicationsComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class DashboardMainComponent {
  protected wishlistLoading = signal(true);
  protected savedDestinations = signal<SavedDestination[]>([]);
  protected errorMessage = signal('');

  constructor(private wishlistService: WishlistService) {
    afterNextRender(() => {
      this.loadWishlist();
    });
  }

  private loadWishlist(): void {
    this.wishlistLoading.set(true);
    this.wishlistService.listDestinations().subscribe({
      next: (res) => {
        this.savedDestinations.set(res.savedDestinations || []);
        this.wishlistLoading.set(false);
      },
      error: () => {
        this.savedDestinations.set([]);
        this.wishlistLoading.set(false);
      }
    });
  }
}
