import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { DESTINATIONS, JourneyStep } from '../../data/destinations';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('country') ?? 'usa';
      const destination = DESTINATIONS.find((item) => item.slug === slug) ?? DESTINATIONS[0];

      this.countryName = destination.name;
      this.countryOverview = destination.overview;
      this.highlights = destination.highlights;
      this.steps = destination.steps;
    });
  }
}
