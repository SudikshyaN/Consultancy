import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface University {
  name: string;
  country: string;
  program: string;
  tuition: string;
  status: 'Saved' | 'Recommended' | 'Popular';
}

@Component({
  selector: 'app-dashboard-universities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './universities.html',
  styleUrl: './universities.scss'
})
export class DashboardUniversitiesComponent {
  protected readonly universities: University[] = [
    {
      name: 'University of Melbourne',
      country: 'Australia',
      program: 'MSc Information Systems',
      tuition: 'AUD 48k / year',
      status: 'Recommended',
    },
    {
      name: 'University of Toronto',
      country: 'Canada',
      program: 'MEng Computer Engineering',
      tuition: 'CAD 67k / year',
      status: 'Popular',
    },
    {
      name: 'University of Manchester',
      country: 'United Kingdom',
      program: 'MSc Data Science',
      tuition: 'GBP 31k / year',
      status: 'Saved',
    },
  ];
}
