import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UniversityProgram {
  name: string;
  fields: string[];
  degrees: string[];
  minGpa?: number | null;
  minIelts?: number | null;
  minToefl?: number | null;
  minGmat?: number | null;
}

export interface University {
  _id?: string;
  id?: string;
  name: string;
  country: string;
  city: string;
  website: string;
  tuitionRange: string;
  programs: UniversityProgram[];
  tags: string[];
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UniversityListResponse {
  country: string;
  universities: University[];
}

export interface UniversityMutationResponse {
  message: string;
  university: University;
}

@Injectable({ providedIn: 'root' })
export class UniversityConnector {
  private readonly baseUrl = `${environment.apiBaseUrl}/api/universities`;

  constructor(private http: HttpClient) {}

  getAdminUniversities(country?: string): Observable<UniversityListResponse> {
    const url = country
      ? `${this.baseUrl}/admin?country=${encodeURIComponent(country)}`
      : `${this.baseUrl}/admin`;
    return this.http.get<UniversityListResponse>(url);
  }

  create(data: Partial<University>): Observable<UniversityMutationResponse> {
    return this.http.post<UniversityMutationResponse>(`${this.baseUrl}/admin`, data);
  }

  update(id: string, data: Partial<University>): Observable<UniversityMutationResponse> {
    return this.http.put<UniversityMutationResponse>(`${this.baseUrl}/admin/${id}`, data);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/admin/${id}`);
  }

  getByCountry(country: string): Observable<UniversityListResponse> {
    return this.http.get<UniversityListResponse>(
      `${this.baseUrl}/by-country?country=${encodeURIComponent(country)}`
    );
  }

  getRecommendations(country?: string): Observable<UniversityListResponse> {
    const url = country
      ? `${this.baseUrl}/recommendations?country=${encodeURIComponent(country)}`
      : `${this.baseUrl}/recommendations`;
    return this.http.get<UniversityListResponse>(url);
  }
}
