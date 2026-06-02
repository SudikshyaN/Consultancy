import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University, UniversityConnector, UniversityListResponse, UniversityMutationResponse } from './university.connector';


@Injectable({ providedIn: 'root' })
export class UniversityService {
  constructor(private connector: UniversityConnector) { }

  listAdminUniversities(country?: string): Observable<UniversityListResponse> {
    return this.connector.getAdminUniversities(country);
  }

  createUniversity(data: Partial<University>): Observable<UniversityMutationResponse> {
    return this.connector.create(data);
  }

  updateUniversity(id: string, data: Partial<University>): Observable<UniversityMutationResponse> {
    return this.connector.update(id, data);
  }

  deleteUniversity(id: string): Observable<{ message: string }> {
    return this.connector.delete(id);
  }

  getByCountry(country: string): Observable<UniversityListResponse> {
    return this.connector.getByCountry(country);
  }

  getRecommendations(country?: string): Observable<UniversityListResponse> {
    return this.connector.getRecommendations(country);
  }
}
