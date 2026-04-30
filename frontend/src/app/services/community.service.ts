import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

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
  comments: {
    _id: string;
    author: {
      _id: string;
      name: string;
    };
    content: string;
    createdAt: string;
  }[];
  createdAt: string;
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

  likePost(postId: string): Observable<{ likes: string[] }> {
    return this.http.post<{ message: string, likes: string[] }>(`${this.baseUrl}/${postId}/like`, {}).pipe(
      tap(res => {
        const currentPosts = this.posts();
        const index = currentPosts.findIndex(p => p._id === postId);
        if (index !== -1) {
          currentPosts[index].likes = res.likes;
          this.posts.set([...currentPosts]);
        }
      })
    );
  }

  addComment(postId: string, content: string): Observable<{ comments: any[] }> {
    return this.http.post<{ message: string, comments: any[] }>(`${this.baseUrl}/${postId}/comment`, { content }).pipe(
      tap(res => {
        const currentPosts = this.posts();
        const index = currentPosts.findIndex(p => p._id === postId);
        if (index !== -1) {
          currentPosts[index].comments = res.comments;
          this.posts.set([...currentPosts]);
        }
      })
    );
  }
}
