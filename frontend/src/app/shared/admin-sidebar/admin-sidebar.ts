import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.scss'
})
export class AdminSidebarComponent {
  @Output() logoutClicked = new EventEmitter<void>();

  protected readonly items = [
    { label: 'Universities', path: '/admin/universities' },
    { label: 'Country', path: '/admin/countries' },
    { label: 'Video Upload', path: '/admin/videos' },
  ];

  logout(): void {
    this.logoutClicked.emit();
  }
}
