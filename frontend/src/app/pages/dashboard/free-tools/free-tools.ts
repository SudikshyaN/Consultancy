import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DashboardTool {
  title: string;
  description: string;
  action: string;
  detail: string;
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
      detail: 'SOP Maker is selected. Add the SOP form here when you are ready to build the tool.',
    },
    {
      title: 'Visa Checklist',
      description: 'Track documents, finances, appointments, and travel readiness.',
      action: 'Open checklist',
      detail: 'Visa Checklist is selected. You can keep checklist tasks inside this dashboard page.',
    },
    {
      title: 'Budget Planner',
      description: 'Estimate tuition, living costs, deposits, and savings gaps.',
      action: 'Plan budget',
      detail: 'Budget Planner is selected. This section can show fee, living cost, and savings inputs.',
    },
  ];
  protected selectedTool = this.tools[0];

  openTool(tool: DashboardTool): void {
    this.selectedTool = tool;
  }
}
