import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  host: {
    'class': 'app-dashboard-sidebar'
  },  styleUrl: './sidebar.scss'
})
export class DashboardSidebarComponent {
  @Output() logoutClicked = new EventEmitter<void>();

  protected readonly items = [

    { label: 'Main', path: '/dashboard/main' },
    
    { label: 'Profile', path: '/dashboard/profile' },
    { label: 'Country', path: '/dashboard/country' },
    { label: 'Community', path: '/dashboard/community' },
    { label: 'SOP Maker', path: '/dashboard/sop-maker' },
  ];

  logout(): void {
    this.logoutClicked.emit();
  }
}
