import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../src/environments/environment';

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
  universities: University[];
}

export interface UniversityMutationResponse {
  message: string;
  university: University;
}

@Injectable({ providedIn: 'root' })
export class UniversityService {
  private readonly universitiesUrl = `${environment.apiBaseUrl}/api/universities`;

  constructor(private http: HttpClient) {}

  listAdminUniversities(country?: string): Observable<UniversityListResponse> {
    const url = country
      ? `${this.universitiesUrl}/admin?country=${encodeURIComponent(country)}`
      : `${this.universitiesUrl}/admin`;

    return this.http.get<UniversityListResponse>(url);
  }

  createUniversity(data: University): Observable<UniversityMutationResponse> {
    return this.http.post<UniversityMutationResponse>(`${this.universitiesUrl}/admin`, data);
  }

  updateUniversity(id: string, data: University): Observable<UniversityMutationResponse> {
    return this.http.put<UniversityMutationResponse>(`${this.universitiesUrl}/admin/${id}`, data);
  }

  deleteUniversity(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.universitiesUrl}/admin/${id}`);
  }
}
