import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Destination } from '../../shared/data/destinations';
import { DestinationService } from '../../services/destination.service';

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
    private route: ActivatedRoute,
    private destinationService: DestinationService
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
    this.destinationService.getDestinationBySlug(slug).subscribe({
      next: (res) => {
        this.country = res.destination;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading country:', err);
        this.country = null;
        this.isLoading = false;
      }
    });
  }
}