import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: SafeHtml;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class DashboardSidebarComponent {
  @Output() logoutClicked = new EventEmitter<void>();

  protected readonly items: NavItem[];

  constructor(private sanitizer: DomSanitizer) {
    this.items = [
      {
        label: 'Main',
        path: '/dashboard/main',
        icon: this.svg(`<rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>`)
      },
      {
        label: 'Profile',
        path: '/dashboard/profile',
        icon: this.svg(`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>`)
      },
      {
        label: 'Wishlist',
        path: '/dashboard/wishlist',
        icon: this.svg(`<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`)
      },
      {
        label: 'Community',
        path: '/dashboard/community',
        icon: this.svg(`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>`)
      },
    ];
  }

  /** Wraps SVG path markup in a full sanitized SVG element */
  private svg(paths: string): SafeHtml {
    const raw = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   ${paths}
                 </svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  logout(): void {
    this.logoutClicked.emit();
  }
}
