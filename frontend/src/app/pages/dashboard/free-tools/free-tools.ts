import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface DashboardTool {
  title: string;
  description: string;
  action: string;
}

@Component({
  selector: 'app-dashboard-free-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './free-tools.html',
  styleUrl: './free-tools.scss'
})
export class DashboardFreeToolsComponent {
  protected readonly tools: DashboardTool[] = [
    {
      title: 'SOP Maker & Reviewer',
      description: 'Create a structured statement of purpose draft with guided prompts.',
      action: 'Start SOP',
    },
    {
      title: 'Visa Checklist',
      description: 'Track documents, finances, appointments, and travel readiness.',
      action: 'Open checklist',
    },
    {
      title: 'Budget Planner',
      description: 'Estimate tuition, living costs, deposits, and savings gaps.',
      action: 'Plan budget',
    },
  ];

  constructor(private router: Router) {}

  openTool(tool: DashboardTool): void {
    if (tool.title === 'Budget Planner') {
      this.router.navigate(['/']);
      return;
    }

    if (tool.title === 'SOP Maker & Reviewer') {
      this.router.navigate(['/freetools']);
    }
  }
}
