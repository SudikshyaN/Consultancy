import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from '../layout/layout';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, Layout],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent {

  blogs = [
    {
      category: 'SOP TIPS',
      title: 'How to write a statement of purpose that actually gets you admitted',
      description: 'The 5 things top-ranked universities look for in an SOP — and the 3 mistakes Nepali students make most often.',
      author: 'Priya Shrestha',
      date: 'Mar 22, 2025',
      time: '8 min'
    },
    {
      category: 'FINANCE',
      title: 'How much money do you actually need to study in Germany?',
      description: 'Blocked account, semester fees, rent in Berlin vs Munich — a complete breakdown for Nepali students applying this year.',
      author: 'Arjun Tamang',
      date: 'Mar 18, 2025',
      time: '6 min'
    },
    {
      category: 'VISA GUIDE',
      title: 'Canada study permit 2025 — what changed for Nepali students',
      description: 'PAL requirements, SDS vs regular stream, and the new CAP on international students — explained simply.',
      author: 'Rohan KC',
      date: 'Mar 14, 2025',
      time: '10 min'
    }
  ];

}