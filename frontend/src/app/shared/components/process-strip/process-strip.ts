import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { DESTINATIONS } from '../../data/destinations';

@Component({
  selector: 'app-process-strip',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './process-strip.html',
  styleUrl: './process-strip.scss'
})
export class ProcessStripComponent {
  private readonly router = inject(Router);

  protected readonly countries = DESTINATIONS;

  protected isActiveCountry(slug: string): boolean {
    return this.router.url.startsWith(`/destinations/${slug}`);
  }
}