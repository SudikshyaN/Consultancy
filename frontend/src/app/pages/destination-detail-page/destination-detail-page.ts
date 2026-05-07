import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESTINATIONS, Destination } from '../../shared/data/destinations';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destination-detail-page.html',
  styleUrls: ['./destination-detail-page.scss']
})
export class DestinationDetailComponent implements OnInit {

  country: Destination | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadCountry(slug);
      }
    });
  }

  loadCountry(slug: string) {
    this.isLoading = true;
    // Load from static data
    const found = DESTINATIONS.find(d => d.slug === slug);
    if (found) {
      this.country = found;
    } else {
      this.country = null;
    }
    this.isLoading = false;
  }
}