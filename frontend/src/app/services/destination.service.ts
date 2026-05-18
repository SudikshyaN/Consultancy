import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Destination, DESTINATIONS } from '../shared/data/destinations';

export interface DestinationListResponse {
  destinations: Destination[];
}

@Injectable({ providedIn: 'root' })
export class DestinationService {
  private readonly baseUrl = `${environment.apiBaseUrl}/api/destinations`;

  constructor(private http: HttpClient) { }

  listDestinations(): Observable<DestinationListResponse> {
    return this.http.get<DestinationListResponse>(this.baseUrl).pipe(
      catchError(() => of({ destinations: DESTINATIONS }))
    );
  }

  getDestinationBySlug(slug: string): Observable<{ destination: Destination }> {
    return this.http.get<{ destination: Destination }>(`${this.baseUrl}/${slug}`).pipe(
      catchError(() => {
        const destination = DESTINATIONS.find((item) => item.slug === slug);

        if (!destination) {
          return throwError(() => new Error('Destination not found.'));
        }

        return of({ destination });
      })
    );
  }

  updateDestination(id: string, data: Partial<Destination>): Observable<{ destination: Destination }> {
    return this.http.put<{ destination: Destination }>(`${this.baseUrl}/${id}`, data);
  }
}
