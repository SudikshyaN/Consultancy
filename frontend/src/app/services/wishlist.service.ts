import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SavedDestination {
  slug: string;
  name: string;
  visa: string;
  flag: string;
  savedAt?: string;
}

export interface WishlistResponse {
  message?: string;
  savedDestinations: SavedDestination[];
}

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly baseUrl = `${environment.apiBaseUrl}/api/wishlist`;

  constructor(private http: HttpClient) {}

  listDestinations(): Observable<WishlistResponse> {
    return this.http.get<WishlistResponse>(`${this.baseUrl}/destinations`).pipe(
      catchError(() => of({ savedDestinations: [] }))
    );
  }

  addDestination(destination: SavedDestination): Observable<WishlistResponse> {
    return this.http.post<WishlistResponse>(`${this.baseUrl}/destinations`, destination);
  }

  removeDestination(slug: string): Observable<WishlistResponse> {
    return this.http.delete<WishlistResponse>(`${this.baseUrl}/destinations/${encodeURIComponent(slug)}`);
  }
}
