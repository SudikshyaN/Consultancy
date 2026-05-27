import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CommunityComment {
  _id: string;
  author: {
    _id: string;
    name: string;
  };
  content: string;
  createdAt: string;
  editedAt?: string | null;
}

export interface CommunityPost {
  _id: string;
  author: {
    _id: string;
    name: string;
    email: string;
  };
  authorMetadata?: {
    status: string;
    degree: string;
    university: string;
    location: string;
  };
  content: string;
  tags: string[];
  likes: string[];
  comments: CommunityComment[];
  createdAt: string;
  editedAt?: string | null;
}

@Injectable({ providedIn: 'root' })
export class CommunityService {
  private readonly baseUrl = `${environment.apiBaseUrl}/api/community`;

  posts = signal<CommunityPost[]>([]);

  constructor(private http: HttpClient) {}

  getPosts(tag?: string): Observable<{ posts: CommunityPost[] }> {
    const url = tag && tag !== 'All posts' ? `${this.baseUrl}?tag=${encodeURIComponent(tag)}` : this.baseUrl;
    return this.http.get<{ posts: CommunityPost[] }>(url).pipe(
      tap(res => this.posts.set(res.posts))
    );
  }

  createPost(content: string, tags: string[]): Observable<{ post: CommunityPost }> {
    return this.http.post<{ post: CommunityPost }>(this.baseUrl, { content, tags });
  }

  editPost(postId: string, content: string, tags: string[]): Observable<{ message: string; post: CommunityPost }> {
    return this.http.put<{ message: string; post: CommunityPost }>(`${this.baseUrl}/${postId}`, { content, tags }).pipe(
      tap(res => {
        // Immutable replace — creates a brand-new array so Angular detects the change
        this.posts.set(
          this.posts().map(p => p._id === postId ? res.post : p)
        );
      })
    );
  }

  likePost(postId: string): Observable<{ likes: string[] }> {
    return this.http.post<{ message: string; likes: string[] }>(`${this.baseUrl}/${postId}/like`, {}).pipe(
      tap(res => {
        this.posts.set(
          this.posts().map(p => p._id === postId ? { ...p, likes: res.likes } : p)
        );
      })
    );
  }

  addComment(postId: string, content: string): Observable<{ comments: CommunityComment[] }> {
    return this.http.post<{ message: string; comments: CommunityComment[] }>(`${this.baseUrl}/${postId}/comment`, { content }).pipe(
      tap(res => {
        this.posts.set(
          this.posts().map(p => p._id === postId ? { ...p, comments: res.comments } : p)
        );
      })
    );
  }

  editComment(postId: string, commentId: string, content: string): Observable<{ message: string; comments: CommunityComment[] }> {
    return this.http.put<{ message: string; comments: CommunityComment[] }>(
      `${this.baseUrl}/${postId}/comment/${commentId}`,
      { content }
    ).pipe(
      tap(res => {
        this.posts.set(
          this.posts().map(p => p._id === postId ? { ...p, comments: res.comments } : p)
        );
      })
    );
  }
}
