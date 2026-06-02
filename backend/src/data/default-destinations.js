const DEFAULT_DESTINATIONS = [
  {
    name: 'USA',
    slug: 'usa',
    visa: 'F-1 Visa',
    flag: 'https://flagcdn.com/w80/us.png',
    
    highlights: ['Top-ranked universities', 'STEM-friendly programs', 'Strong scholarship ecosystem'],
  },
  {
    name: 'UK',
    slug: 'uk',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/gb.png',
   
    highlights: ['One-year master programs', 'Global recognition', 'Clear intake cycles'],
    livingCost: '£ 1,430/mo',
    tuition: '£15,000–35,000/yr',
    visaFee: 'Student visa (Tier 4)',
    partTimeWork: '20 hrs/week',
    ieltsRequirement: '6.5+',
    costBreakdown: {
      rent: 800,
      food: 300,
      transport: 100,
      bills: 80,
      personal: 150
    },
    roadmap: [
      {
        title: 'IELTS / English test',
        duration: '2-3 months',
        description: 'Register for IELTS Academic. You need minimum 6.5 overall. Many UK universities require 7.0 for competitive courses.',
        tags: ['British Council Nepal', 'IELTS fee ~NPR 28,000'],
        checklist: [
          { task: 'Register on ielts.org' },
          { task: 'Study 2-3 months' },
          { task: 'Take test in Kathmandu' },
          { task: 'Score report sent in 13 days' }
        ]
      },
      {
        title: 'Choose & apply to universities',
        duration: '1-2 months',
        description: 'Research and shortlist at least 3-5 universities based on your budget and course interest.',
        tags: ['Shortlisting', 'UCAS'],
        checklist: [
          { task: 'Check entry requirements' },
          { task: 'Prepare SOP and CV' },
          { task: 'Submit applications' }
        ]
      }
    ]
  },
  {
    name: 'Australia',
    slug: 'australia',
    visa: 'Subclass 500',
    flag: 'https://flagcdn.com/w80/au.png',
    
    highlights: ['Regional study options', 'Post-study work pathways', 'Practical learning'],
  },
  {
    name: 'Canada',
    slug: 'canada',
    visa: 'SDS / Regular',
    flag: 'https://flagcdn.com/w80/ca.png',
    
    highlights: ['Applied learning', 'Public colleges and universities', 'Structured visa pathways'],
  },
  {
    name: 'Germany',
    slug: 'germany',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/de.png',
    
    highlights: ['Affordable tuition', 'Public universities', 'Engineering strength'],
  },
  {
    name: 'Japan',
    slug: 'japan',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/jp.png',
    
    highlights: ['Affordable study options', 'Technology focus', 'Growing scholarship support'],
  },
  {
    name: 'New Zealand',
    slug: 'new-zealand',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/nz.png',
   
    highlights: ['Safe environment', 'Quality institutions', 'Lifestyle appeal'],
  },
  {
    name: 'South Korea',
    slug: 'south-korea',
    visa: 'D-2 Visa',
    flag: 'https://flagcdn.com/w80/kr.png',
    
    highlights: ['Innovation-driven education', 'Modern campuses', 'Scholarship potential'],
  },
];

module.exports = {
  DEFAULT_DESTINATIONS,
};
