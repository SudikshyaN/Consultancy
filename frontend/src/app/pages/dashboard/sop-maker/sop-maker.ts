import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SopCommunitySubmission, SopMakerService } from '../../../services/sop-maker.service';

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

  private cleanGeneratedText(value: string): string {
    return value
      .replace(/^#{1,6}\s*/gm, '')
      .replace(/\*\*/g, '')
      .replace(/^\s*\*\s+/gm, '- ')
      .replace(/\*{3,}/g, '')
      .replace(/[ \t]+$/gm, '');
  }
}
