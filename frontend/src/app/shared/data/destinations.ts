export interface JourneyStep {
  title: string;
  subtitle: string;
  tag: string;
  tagColor: 'yellow' | 'blue' | 'green';
  icon: string;
}

export interface Destination {
  _id?: string;
  name: string;
  slug: string;
  visa: string;
  flag: string;
  overview: string;
  highlights: string[];
  steps: JourneyStep[];
  livingCost?: string;
  tuition?: string;
  visaFee?: string;
  partTimeWork?: string;
  ieltsRequirement?: string;
  costBreakdown?: {
    rent: number;
    food: number;
    transport: number;
    bills: number;
    personal: number;
  };
  roadmap?: RoadmapStep[];
}

export interface RoadmapStep {
  title: string;
  duration: string;
  description: string;
  tags: string[];
  checklist: RoadmapChecklistItem[];
}

export interface RoadmapChecklistItem {
  task: string;
}

export const DESTINATIONS: Destination[] = [
  {
    name: 'USA',
    slug: 'usa',
    visa: 'F-1 Visa',
    flag: 'https://flagcdn.com/w80/us.png',
    overview: 'Best for students targeting research-driven universities, flexible majors, and broad scholarship opportunities.',
    highlights: ['Top-ranked universities', 'STEM-friendly programs', 'Strong scholarship ecosystem'],
    steps: [
      {
        title: 'English Proficiency Tests',
        subtitle: 'Prepare IELTS, TOEFL, or Duolingo based on university requirements.',
        tag: 'Start 6-12 months early',
        tagColor: 'yellow',
        icon: 'EN'
      },
      {
        title: 'Shortlist Universities',
        subtitle: 'Balance ranking, tuition, scholarships, and program fit before applying.',
        tag: 'Core planning stage',
        tagColor: 'blue',
        icon: 'UN'
      },
      {
        title: 'Visa and Interview Readiness',
        subtitle: 'Prepare I-20, finances, DS-160, and mock interview support for the F-1 process.',
        tag: 'Final admission phase',
        tagColor: 'green',
        icon: 'VS'
      }
    ]
  },
  {
    name: 'UK',
    slug: 'uk',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/gb.png',
    overview: 'A strong option for one-year master’s programs and globally recognized degrees with faster academic timelines.',
    highlights: ['One-year master programs', 'Global recognition', 'Clear intake cycles'],
    steps: [
      {
        title: 'Profile and Budget Match',
        subtitle: 'Select universities that fit tuition level, location, and career outcome.',
        tag: 'Start early',
        tagColor: 'yellow',
        icon: 'PL'
      },
      {
        title: 'Application and CAS',
        subtitle: 'Submit application documents and secure your Confirmation of Acceptance for Studies.',
        tag: 'Offer stage',
        tagColor: 'blue',
        icon: 'CA'
      },
      {
        title: 'Visa Filing',
        subtitle: 'Prepare financial proof, TB test if required, and complete the Student Visa application.',
        tag: 'Travel ready',
        tagColor: 'green',
        icon: 'UK'
      }
    ]
  },
  {
    name: 'Australia',
    slug: 'australia',
    visa: 'Subclass 500',
    flag: 'https://flagcdn.com/w80/au.png',
    overview: 'Popular for practical education, post-study work opportunities, and quality institutions across major and regional cities.',
    highlights: ['Regional study options', 'Post-study work pathways', 'Practical learning'],
    steps: [
      {
        title: 'Choose Course and Intake',
        subtitle: 'Compare universities, TAFEs, and regional campuses based on affordability and goals.',
        tag: 'Research stage',
        tagColor: 'yellow',
        icon: 'AU'
      },
      {
        title: 'Submit GTE and Documents',
        subtitle: 'Prepare SOP, academic records, financial proof, and health cover details.',
        tag: 'Application stage',
        tagColor: 'blue',
        icon: 'GT'
      },
      {
        title: 'Subclass 500 Filing',
        subtitle: 'Lodge visa application with complete documentation and interview readiness if requested.',
        tag: 'Visa stage',
        tagColor: 'green',
        icon: '50'
      }
    ]
  },
  {
    name: 'Canada',
    slug: 'canada',
    visa: 'SDS / Regular',
    flag: 'https://flagcdn.com/w80/ca.png',
    overview: 'Known for applied learning, welcoming student environments, and a wide mix of college and university choices.',
    highlights: ['Applied learning', 'Public colleges and universities', 'Structured visa pathways'],
    steps: [
      {
        title: 'Academic and Program Shortlisting',
        subtitle: 'Choose institutions based on course fit, budget, and intake timing.',
        tag: 'Foundation stage',
        tagColor: 'yellow',
        icon: 'CA'
      },
      {
        title: 'Receive Offer and Pay Deposit',
        subtitle: 'Secure admission, gather provincial documents if needed, and prepare fee receipts.',
        tag: 'Offer stage',
        tagColor: 'blue',
        icon: 'OF'
      },
      {
        title: 'Study Permit Preparation',
        subtitle: 'Submit SDS or regular study permit documents with finances and statement of purpose.',
        tag: 'Permit stage',
        tagColor: 'green',
        icon: 'SP'
      }
    ]
  },
  {
    name: 'Germany',
    slug: 'germany',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/de.png',
    overview: 'A great route for affordability, technical education, and public universities with strong engineering reputation.',
    highlights: ['Affordable tuition', 'Public universities', 'Engineering strength'],
    steps: [
      {
        title: 'Course and Eligibility Check',
        subtitle: 'Verify degree recognition, language needs, and APS or Uni-Assist requirements.',
        tag: 'Early planning',
        tagColor: 'yellow',
        icon: 'DE'
      },
      {
        title: 'Application and Blocked Account',
        subtitle: 'Apply to universities and prepare finances with a blocked account where required.',
        tag: 'Admission stage',
        tagColor: 'blue',
        icon: 'BL'
      },
      {
        title: 'Embassy Visa Process',
        subtitle: 'Organize appointment, insurance, and complete student visa documentation.',
        tag: 'Embassy stage',
        tagColor: 'green',
        icon: 'EM'
      }
    ]
  },
  {
    name: 'Japan',
    slug: 'japan',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/jp.png',
    overview: 'Emerging as a smart option for affordability, technology-focused education, and scholarship-backed pathways.',
    highlights: ['Affordable study options', 'Technology focus', 'Growing scholarship support'],
    steps: [
      {
        title: 'Institution and Language Planning',
        subtitle: 'Choose between Japanese-language schools, vocational colleges, or universities.',
        tag: 'Preparation stage',
        tagColor: 'yellow',
        icon: 'JP'
      },
      {
        title: 'COE Documentation',
        subtitle: 'Prepare financial documents and submit materials for the Certificate of Eligibility process.',
        tag: 'Application stage',
        tagColor: 'blue',
        icon: 'CE'
      },
      {
        title: 'Visa and Pre-Departure',
        subtitle: 'Complete visa submission, accommodation planning, and travel readiness.',
        tag: 'Final step',
        tagColor: 'green',
        icon: 'VD'
      }
    ]
  },
  {
    name: 'New Zealand',
    slug: 'new-zealand',
    visa: 'Student Visa',
    flag: 'https://flagcdn.com/w80/nz.png',
    overview: 'A balanced destination for quality education, safety, and lifestyle-focused student experience.',
    highlights: ['Safe environment', 'Quality institutions', 'Lifestyle appeal'],
    steps: [
      {
        title: 'Course and Region Selection',
        subtitle: 'Choose universities or institutes based on tuition, city, and future plans.',
        tag: 'Planning stage',
        tagColor: 'yellow',
        icon: 'NZ'
      },
      {
        title: 'Apply and Prepare Finances',
        subtitle: 'Organize academic documents, SOP, and financial support evidence.',
        tag: 'Offer stage',
        tagColor: 'blue',
        icon: 'FN'
      },
      {
        title: 'Student Visa Lodgement',
        subtitle: 'Submit visa file with medicals, finances, and travel planning support.',
        tag: 'Visa stage',
        tagColor: 'green',
        icon: 'SV'
      }
    ]
  },
  {
    name: 'South Korea',
    slug: 'south-korea',
    visa: 'D-2 Visa',
    flag: 'https://flagcdn.com/w80/kr.png',
    overview: 'Ideal for students seeking innovation-led education, modern campuses, and rising scholarship opportunities.',
    highlights: ['Innovation-driven education', 'Modern campuses', 'Scholarship potential'],
    steps: [
      {
        title: 'Program Research',
        subtitle: 'Evaluate Korean universities, English-taught options, and scholarship suitability.',
        tag: 'Research stage',
        tagColor: 'yellow',
        icon: 'KR'
      },
      {
        title: 'Admission and Financial Prep',
        subtitle: 'Submit application documents and prepare proof of funds for the D-2 route.',
        tag: 'Application stage',
        tagColor: 'blue',
        icon: 'AD'
      },
      {
        title: 'Visa and Arrival Planning',
        subtitle: 'Complete embassy filing and organize housing and arrival documents.',
        tag: 'Departure stage',
        tagColor: 'green',
        icon: 'D2'
      }
    ]
  }
];
