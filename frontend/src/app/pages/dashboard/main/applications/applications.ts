import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications.html',
  styleUrl: './applications.scss'
})
export class ApplicationsComponent {

  universities = [
    {
      rank: 1,
      university: 'Massachusetts Institute of Technology',
      course: 'MSc Computer Science · USA',
      short: 'MIT',
      flag: '🇺🇸',
      country: 'USA',
      score: 100,
      color: '#a31f34',
      gradient: 'linear-gradient(135deg, #a31f34, #8b1a2b)'
    },
    {
      rank: 2,
      university: 'University of Cambridge',
      course: 'MSc Engineering · UK',
      short: 'CAM',
      flag: '🇬🇧',
      country: 'United Kingdom',
      score: 99.2,
      color: '#00796b',
      gradient: 'linear-gradient(135deg, #00796b, #004d40)'
    },
    {
      rank: 3,
      university: 'University of Oxford',
      course: 'MSc AI & Ethics · UK',
      short: 'OXF',
      flag: '🇬🇧',
      country: 'United Kingdom',
      score: 98.9,
      color: '#002147',
      gradient: 'linear-gradient(135deg, #002147, #001a38)'
    },
    {
      rank: 4,
      university: 'Harvard University',
      course: 'MSc Data Science · USA',
      short: 'HAR',
      flag: '🇺🇸',
      country: 'USA',
      score: 98.3,
      color: '#a51c30',
      gradient: 'linear-gradient(135deg, #a51c30, #8c1726)'
    },
    {
      rank: 5,
      university: 'Stanford University',
      course: 'MSc Computer Science · USA',
      short: 'STA',
      flag: '🇺🇸',
      country: 'USA',
      score: 98.1,
      color: '#8c1515',
      gradient: 'linear-gradient(135deg, #8c1515, #6e1010)'
    },
    {
      rank: 6,
      university: 'Imperial College London',
      course: 'MSc Machine Learning · UK',
      short: 'ICL',
      flag: '🇬🇧',
      country: 'United Kingdom',
      score: 97.8,
      color: '#003e74',
      gradient: 'linear-gradient(135deg, #003e74, #002d55)'
    },
    {
      rank: 7,
      university: 'ETH Zurich',
      course: 'MSc Data Science · Switzerland',
      short: 'ETH',
      flag: '🇨🇭',
      country: 'Switzerland',
      score: 97.3,
      color: '#1a5276',
      gradient: 'linear-gradient(135deg, #1a5276, #11374f)'
    },
    {
      rank: 8,
      university: 'National University of Singapore',
      course: 'MSc Software Engineering · SG',
      short: 'NUS',
      flag: '🇸🇬',
      country: 'Singapore',
      score: 96.7,
      color: '#003d7c',
      gradient: 'linear-gradient(135deg, #003d7c, #002b59)'
    },
    {
      rank: 9,
      university: 'UCL (University College London)',
      course: 'MSc Artificial Intelligence · UK',
      short: 'UCL',
      flag: '🇬🇧',
      country: 'United Kingdom',
      score: 96.4,
      color: '#500778',
      gradient: 'linear-gradient(135deg, #500778, #3b0559)'
    },
    {
      rank: 10,
      university: 'University of California, Berkeley',
      course: 'MSc Computer Science · USA',
      short: 'UCB',
      flag: '🇺🇸',
      country: 'USA',
      score: 95.8,
      color: '#003262',
      gradient: 'linear-gradient(135deg, #003262, #002248)'
    }
  ];
}