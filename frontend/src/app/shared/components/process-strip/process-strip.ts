import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { DestinationService } from '../../../services/destination.service';
import { Destination } from '../../data/destinations';

@Component({
  selector: 'app-process-strip',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './process-strip.html',
  styleUrl: './process-strip.scss'
})
export class ProcessStripComponent {
  private readonly router = inject(Router);
  private readonly destinationService = inject(DestinationService);

  protected readonly countries = signal<Destination[]>([]);

  constructor() {
    this.destinationService.listDestinations().subscribe({
      next: (res) => this.countries.set(res.destinations),
      error: (err) => console.error('Error loading countries in strip:', err)
    });
  }

  protected isActiveCountry(slug: string): boolean {
    return this.router.url.startsWith(`/destinations/${slug}`);
  }
}
