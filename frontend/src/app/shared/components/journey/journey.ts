import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

import { Destination, JourneyStep } from '../../data/destinations';
import { DestinationService } from '../../../services/destination.service';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './journey.html',
  styleUrls: ['./journey.scss']
})
export class Journey implements OnInit {
  destinations: Destination[] = [];
  selectedSlug = 'usa';

  countryName = 'USA';
  countryOverview = '';
  highlights: string[] = [];
  steps: JourneyStep[] = [];

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    // 1. Fetch all destinations to populate country selector pills
    this.destinationService.listDestinations().subscribe({
      next: (res) => {
        this.destinations = res.destinations;
        
        // 2. Read route parameter if it exists, otherwise default to 'usa'
        this.route.paramMap.subscribe((params) => {
          const slug = params.get('country') ?? params.get('slug') ?? 'usa';
          this.loadJourneyForCountry(slug);
        });
      },
      error: (err) => {
        console.error('Error listing destinations in journey:', err);
      }
    });
  }

  // Load selected country details
  loadJourneyForCountry(slug: string): void {
    this.selectedSlug = slug;
    this.destinationService.getDestinationBySlug(slug).subscribe({
      next: (res) => {
        const destination = res.destination;
        this.countryName = destination.name;
        this.countryOverview = destination.overview;
        this.highlights = destination.highlights;
        this.steps = destination.steps;
      },
      error: (err) => {
        console.error('Error loading destination details in journey:', err);
      }
    });
  }

  // Handle manual tab switching
  selectCountry(slug: string): void {
    this.loadJourneyForCountry(slug);
  }
}
