import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Video {
  _id?: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  duration: string;
  author: string;
  views: string;
  category: string;
  country: string;
  featured?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = `${environment.apiBaseUrl}/api/videos`;

  constructor(private http: HttpClient) {}

  getVideos(country?: string): Observable<Video[]> {
    let params = new HttpParams();
    if (country && country !== 'All') {
      params = params.set('country', country);
    }
    return this.http.get<Video[]>(this.apiUrl, { params });
  }

  createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.apiUrl, video);
  }

  updateVideo(id: string, video: Partial<Video>): Observable<Video> {
    return this.http.put<Video>(`${this.apiUrl}/${id}`, video);
  }

  deleteVideo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
