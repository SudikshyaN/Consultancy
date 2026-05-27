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

  applications = [
    {
      university: 'Massachusetts Institute of Technology',
      course: 'MSc Computer Science · USA',
      status: 'under-review',
      statusLabel: 'Under Review',
      short: 'MIT'
    },
    {
      university: 'University of Oxford',
      course: 'MSc AI & Ethics · UK',
      status: 'applied',
      statusLabel: 'Applied',
      short: 'OXF'
    },
    {
      university: 'ETH Zurich',
      course: 'MSc Data Science · Switzerland',
      status: 'accepted',
      statusLabel: 'Accepted',
      short: 'ETH'
    },
    {
      university: 'National University of Singapore',
      course: 'MSc Software Engineering · SG',
      status: 'rejected',
      statusLabel: 'Rejected',
      short: 'NUS'
    }
  ];

}