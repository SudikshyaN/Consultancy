import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TopUniversity {
  rank: number;
  name: string;
  country: string;
  flag: string;
  short: string;
  score: number;
  field: string;
}

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications.html',
  styleUrl: './applications.scss'
})
export class ApplicationsComponent {

  universities: TopUniversity[] = [
    { rank: 1, name: 'Massachusetts Institute of Technology', country: 'USA', flag: '🇺🇸', short: 'MIT',  score: 100.0, field: 'Engineering & Technology' },
    { rank: 2, name: 'Imperial College London',               country: 'UK',  flag: '🇬🇧', short: 'ICL',  score: 98.5,  field: 'Science & Medicine' },
    { rank: 3, name: 'University of Oxford',                  country: 'UK',  flag: '🇬🇧', short: 'OXF',  score: 97.9,  field: 'Humanities & Sciences' },
    { rank: 4, name: 'Harvard University',                    country: 'USA', flag: '🇺🇸', short: 'HRV',  score: 97.4,  field: 'Law, Medicine & Business' },
    { rank: 5, name: 'University of Cambridge',               country: 'UK',  flag: '🇬🇧', short: 'CAM',  score: 96.8,  field: 'Multidisciplinary Research' },
    { rank: 6, name: 'Stanford University',                   country: 'USA', flag: '🇺🇸', short: 'STF',  score: 96.1,  field: 'Technology & Business' },
    { rank: 7, name: 'ETH Zurich',                           country: 'CHE', flag: '🇨🇭', short: 'ETH',  score: 95.4,  field: 'Science & Engineering' },
    { rank: 8, name: 'National University of Singapore',      country: 'SGP', flag: '🇸🇬', short: 'NUS',  score: 94.7,  field: 'Computing & Business' },
    { rank: 9, name: 'UCL – University College London',       country: 'UK',  flag: '🇬🇧', short: 'UCL',  score: 94.2,  field: 'Arts, Sciences & Medicine' },
    { rank: 10, name: 'University of California, Berkeley',   country: 'USA', flag: '🇺🇸', short: 'UCB',  score: 93.6,  field: 'Engineering & Social Science' },
  ];
}