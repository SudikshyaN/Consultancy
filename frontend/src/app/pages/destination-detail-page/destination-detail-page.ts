import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-detail-page.html',
  styleUrls: ['./destination-detail-page.scss']
})
export class DestinationDetailComponent implements OnInit {

  country: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.loadCountry(slug);
  }

  loadCountry(slug: string | null) {
    const data: any = {
      usa: {
        name: 'United States',
        flag: '🇺🇸',
        overview: 'Home to top-ranked universities and strong career opportunities.',
        visaType: 'F-1 Student Visa',
        processingTime: '3 - 8 weeks',
        visaFee: '$160',
        validity: 'Duration of study',
        tuition: '$29,000',
        ielts: '6.5 - 7.0',
        universities: '4500+ universities',
        work: 'OPT up to 3 years',
        intakes: 'Jan & Sept',

        applicationSteps: [
          { step: 1, title: 'Choose University', description: 'Select universities', duration: '1-2 weeks' },
          { step: 2, title: 'Prepare Documents', description: 'Gather SOP, IELTS', duration: '2-3 weeks' },
          { step: 3, title: 'Apply', description: 'Submit applications', duration: '2 weeks' }
        ],

        documents: [
          'Passport',
          'Academic transcripts',
          'IELTS/TOEFL',
          'SOP',
          'Financial proof'
        ],

        financialRequirement: 'Minimum $10,000 - $15,000 bank balance required.',

        tips: [
          'Apply early',
          'Prepare strong SOP',
          'Choose realistic universities'
        ],

        postArrival: [
          'Open bank account',
          'Get SIM card',
          'Register at university'
        ]
      },

      australia: {
        name: 'Australia',
        flag: '🇦🇺',
        overview: 'High quality education with work opportunities.',
        visaType: 'Subclass 500',
        processingTime: '4 - 6 weeks',
        visaFee: '$710',
        validity: 'Course duration',
        tuition: '$22,000',
        ielts: '6.0 - 6.5',
        universities: 'Top ranked universities',
        work: 'Work while studying',
        intakes: 'Feb & July',

        applicationSteps: [],
        documents: [],
        financialRequirement: '',
        tips: [],
        postArrival: []
      }
    };

    this.country = data[slug || 'usa'];
  }
}