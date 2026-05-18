import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SopMakerForm {
  processName: string;
  department: string;
  goal: string;
  audience: string;
  roles: string;
  tools: string;
  steps: string;
  standards: string;
  risks: string;
}

export interface SopCommunitySubmission {
  _id: string;
  title: string;
  department: string;
  formData: SopMakerForm;
  content: string;
  aiReview: string;
  author: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class SopMakerService {
  private readonly baseUrl = `${environment.apiBaseUrl}/api/sop-maker`;

  constructor(private http: HttpClient) {}

  review(content: string): Observable<{ review: string }> {
    return this.http.post<{ review: string }>(`${this.baseUrl}/review`, { content });
  }

  listCommunity(): Observable<{ submissions: SopCommunitySubmission[] }> {
    return this.http.get<{ submissions: SopCommunitySubmission[] }>(`${this.baseUrl}/community`);
  }

  submitToCommunity(payload: {
    formData: SopMakerForm;
    content: string;
    aiReview: string;
  }): Observable<{ submission: SopCommunitySubmission }> {
    return this.http.post<{ submission: SopCommunitySubmission }>(`${this.baseUrl}/community`, payload);
  }

  async generateStream(
    payload: SopMakerForm,
    handlers: {
      onChunk: (text: string) => void;
      onDone: () => void;
      onError: (message: string) => void;
    }
  ): Promise<void> {
    const token = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('token') : null;
    const response = await fetch(`${this.baseUrl}/generate`, {
      method: 'POST',
      headers: {
        'Accept': 'text/event-stream',
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok || !response.body) {
      const error = await response.json().catch(() => null);
      handlers.onError(error?.message || 'Unable to generate resume summary.');
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let completed = false;

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const eventBlocks = buffer.split('\n\n');
      buffer = eventBlocks.pop() || '';

      for (const block of eventBlocks) {
        const event = block.split('\n').find((line) => line.startsWith('event: '))?.slice(7);
        const dataLine = block.split('\n').find((line) => line.startsWith('data: '));

        if (!event || !dataLine) {
          continue;
        }

        const data = JSON.parse(dataLine.slice(6));

        if (event === 'chunk') {
          handlers.onChunk(data.text || '');
        }

        if (event === 'done') {
          completed = true;
          handlers.onDone();
        }

        if (event === 'error') {
          completed = true;
          handlers.onError(data.message || 'Unable to generate resume summary.');
        }
      }
    }

    if (!completed) {
      handlers.onDone();
    }
  }
}
