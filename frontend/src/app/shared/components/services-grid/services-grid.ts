import { Component } from '@angular/core';


@Component({
  selector: 'app-services-grid',
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.scss'
})
export class ServicesGridComponent {
  protected readonly services = [
    {
      title: 'Profile Evaluation',
      description: 'We review academics, budget, work plans, and long-term goals before recommending countries or institutions.'
    },
    {
      title: 'Application Support',
      description: 'Shortlisting, document review, SOP polishing, and deadline tracking are handled through one guided workflow.'
    },
    {
      title: 'Scholarship Strategy',
      description: 'We identify value-focused programs and scholarship opportunities that fit both profile strength and affordability.'
    },
    {
      title: 'Visa Preparation',
      description: 'Mock interviews, financial document guidance, and checklist reviews help students file with more confidence.'
    }
  ];
}
