import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Destination } from '../../shared/data/destinations';
import { DestinationService } from '../../services/destination.service';
import { UniversityService } from '../../services/university.service';
import { University } from '../../services/university.connector';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destination-detail-page.html',
  styleUrls: ['./destination-detail-page.scss']
})
export class DestinationDetailComponent implements OnInit {

  country: Destination | null = null;
  universities: University[] = [];
  isLoading = true;
  universitiesLoading = false;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private universityService: UniversityService
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
        this.loadUniversities(res.destination.name);
      },
      error: (err) => {
        console.error('Error loading country:', err);
        this.country = null;
        this.isLoading = false;
      }
    });
  }

  loadUniversities(countryName: string) {
    this.universitiesLoading = true;
    this.universityService.getByCountry(countryName).subscribe({
      next: (res) => {
        this.universities = res.universities || [];
        this.universitiesLoading = false;
      },
      error: () => {
        this.universities = [];
        this.universitiesLoading = false;
      }
    });
  }
}