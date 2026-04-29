import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DashboardCard {
  title: string;
  value: string | number;
  caption: string;
  icon: string;
  iconTone: 'blue' | 'lavender' | 'gold' | 'mint';
}

export type JourneyStepState = 'complete' | 'active' | 'upcoming';

export interface JourneyStep {
  key: 'profile' | 'explore' | 'apply' | 'visa';
  label: string;
  route: string;
  complete: boolean;
  meta: string;
  number: number;
  state: JourneyStepState;
}

export interface DashboardJourney {
  activeIndex: number;
  steps: JourneyStep[];
}

export interface DashboardOverviewResponse {
  greetingName: string;
  journey: DashboardJourney;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly dashboardUrl = `${environment.apiBaseUrl}/api/dashboard`;

  constructor(private http: HttpClient) {}

  getOverview(): Observable<DashboardOverviewResponse> {
    return this.http.get<DashboardOverviewResponse>(`${this.dashboardUrl}/overview`);
  }
}
