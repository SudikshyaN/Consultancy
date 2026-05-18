import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { DashboardNavComponent } from '../../shared/components/navbar/nav';
import { DashboardSidebarComponent } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet, DashboardNavComponent, DashboardSidebarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  get user() {
    return this.authService.getUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
