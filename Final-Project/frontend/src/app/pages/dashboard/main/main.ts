import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class DashboardMainComponent {
  protected activeCard = 0;

  protected readonly statCards = Array.from({ length: 4 });

  setActiveCard(index: number): void {
    this.activeCard = index;
  }
}
