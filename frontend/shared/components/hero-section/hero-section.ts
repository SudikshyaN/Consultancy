import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  host: { class: 'app-hero-section' }
})
export class HeroSectionComponent {

  @Input() proofItems: string[] = [];

  @Input() highlights: { value: string; label: string }[] = [];
}