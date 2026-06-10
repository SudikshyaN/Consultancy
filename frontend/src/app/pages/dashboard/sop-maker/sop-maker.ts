import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SopCommunitySubmission, SopMakerService } from '../../../services/sop-maker.service';
import { AuthService } from '../../../services/auth.services';

@Component({
  selector: 'app-dashboard-sop-maker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sop-maker.html',
  styleUrl: './sop-maker.scss'
})
export class DashboardSopMakerComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly sopMakerService = inject(SopMakerService);
  private readonly authService = inject(AuthService);

  protected readonly currentUser = this.authService.getUser();
  protected readonly expandedReviews = signal<Record<string, boolean>>({});
  protected readonly expandedComments = signal<Record<string, boolean>>({});

  protected readonly isGenerating = signal(false);
  protected readonly isReviewing = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly isLoadingFeed = signal(false);
  protected readonly sopContent = signal('');
  protected readonly aiReview = signal('');
  protected readonly errorMessage = signal('');
  protected readonly successMessage = signal('');
  protected readonly communityFeed = signal<SopCommunitySubmission[]>([]);

  protected readonly sopForm = this.fb.nonNullable.group({
    processName: ['', Validators.required],
    department: [''],
    goal: [''],
    audience: [''],
    roles: [''],
    tools: [''],
    steps: [''],
    standards: [''],
    risks: [''],
  });

  ngOnInit(): void {
    this.loadCommunityFeed();
  }

  generateSop(): void {
    this.errorMessage.set('');
    this.successMessage.set('');

    if (this.sopForm.invalid || this.isGenerating()) {
      this.sopForm.markAllAsTouched();
      return;
    }

    this.isGenerating.set(true);
    this.sopContent.set('');
    this.aiReview.set('');

    this.sopMakerService.generateStream(this.sopForm.getRawValue(), {
      onChunk: (text) => this.sopContent.update((current) => this.cleanGeneratedText(current + text)),
      onDone: () => {
        this.isGenerating.set(false);
      },
      onError: (message) => {
        this.isGenerating.set(false);
        this.errorMessage.set(message);
      },
    }).catch(() => {
      this.isGenerating.set(false);
      this.errorMessage.set('Unable to connect to the resume summary generator.');
    });
  }

  updateSopContent(value: string): void {
    this.sopContent.set(this.cleanGeneratedText(value));
  }

  reviewWithAi(): void {
    const content = this.sopContent().trim();

    if (!content || this.isReviewing()) {
      return;
    }

    this.errorMessage.set('');
    this.successMessage.set('');
    this.isReviewing.set(true);

    this.sopMakerService.review(content).subscribe({
      next: ({ review }) => {
        this.aiReview.set(review);
        this.isReviewing.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Unable to review resume summary.');
        this.isReviewing.set(false);
      },
    });
  }

  submitToCommunity(): void {
    const content = this.sopContent().trim();

    if (!content || this.sopForm.invalid || this.isSubmitting()) {
      this.sopForm.markAllAsTouched();
      return;
    }

    this.errorMessage.set('');
    this.successMessage.set('');
    this.isSubmitting.set(true);

    this.sopMakerService.submitToCommunity({
      formData: this.sopForm.getRawValue(),
      content,
      aiReview: this.aiReview(),
    }).subscribe({
      next: ({ submission }) => {
        this.communityFeed.update((items) => [submission, ...items]);
        this.successMessage.set('Resume summary submitted to the community review feed.');
        this.isSubmitting.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Unable to submit resume summary.');
        this.isSubmitting.set(false);
      },
    });
  }

  loadCommunityFeed(): void {
    this.isLoadingFeed.set(true);

    this.sopMakerService.listCommunity().subscribe({
      next: ({ submissions }) => {
        this.communityFeed.set(submissions);
        this.isLoadingFeed.set(false);
      },
      error: () => this.isLoadingFeed.set(false),
    });
  }

  deleteSubmission(id: string): void {
    if (!confirm('Are you sure you want to delete this resume summary?')) {
      return;
    }

    this.sopMakerService.deleteFromCommunity(id).subscribe({
      next: () => {
        this.communityFeed.update((items) => items.filter((item) => item._id !== id));
        this.successMessage.set('Resume summary deleted successfully.');
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Unable to delete resume summary.');
      },
    });
  }

  toggleReview(id: string): void {
    this.expandedReviews.update((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  toggleComments(id: string): void {
    this.expandedComments.update((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  addComment(id: string, content: string, inputElement: HTMLTextAreaElement): void {
    const trimmed = content.trim();
    if (!trimmed) {
      return;
    }

    this.sopMakerService.addComment(id, trimmed).subscribe({
      next: ({ comments }) => {
        this.communityFeed.update((submissions) =>
          submissions.map((item) => (item._id === id ? { ...item, comments } : item))
        );
        inputElement.value = '';
        this.successMessage.set('Review submitted successfully.');
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Unable to submit review.');
      },
    });
  }

  deleteComment(id: string, commentId: string): void {
    if (!confirm('Are you sure you want to delete this review?')) {
      return;
    }

    this.sopMakerService.deleteComment(id, commentId).subscribe({
      next: ({ comments }) => {
        this.communityFeed.update((submissions) =>
          submissions.map((item) => (item._id === id ? { ...item, comments } : item))
        );
        this.successMessage.set('Review deleted successfully.');
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Unable to delete review.');
      },
    });
  }

  private cleanGeneratedText(value: string): string {
    return value
      .replace(/^#{1,6}\s*/gm, '')
      .replace(/\*\*/g, '')
      .replace(/^\s*\*\s+/gm, '- ')
      .replace(/\*{3,}/g, '')
      .replace(/[ \t]+$/gm, '');
  }
}
