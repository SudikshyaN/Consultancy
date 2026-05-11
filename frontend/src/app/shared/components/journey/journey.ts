import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { JourneyStep } from '../../data/destinations';
import { DestinationService } from '../../../services/destination.service';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [NgClass],
  templateUrl: './journey.html',
  styleUrls: ['./journey.scss']
})
export class Journey implements OnInit {
  countryName = 'USA';
  countryOverview = '';
  highlights: string[] = [];
  steps: JourneyStep[] = [];

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('country') ?? 'usa';
      this.destinationService.getDestinationBySlug(slug).subscribe({
        next: (res) => {
          const destination = res.destination;
          this.countryName = destination.name;
          this.countryOverview = destination.overview;
          this.highlights = destination.highlights;
          this.steps = destination.steps;
        },
        error: (err) => {
          console.error('Error loading destination in journey:', err);
        }
      });
    });
  }
}
