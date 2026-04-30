import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunityService } from '../../../services/community.service';
import { AuthService } from '../../../services/auth.services';

@Component({
  selector: 'app-dashboard-community',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './community.html',
  styleUrl: './community.scss'
})
export class DashboardCommunityComponent implements OnInit {
  protected readonly filterTags = ['All posts', 'Visa', 'Admission', 'Life abroad', 'Scholarship', 'Question'];
  protected readonly postTags = ['Visa', 'Admission', 'Life abroad', 'Scholarship', 'Question'];
  
  protected activeFilter = signal('All posts');
  protected selectedPostTags = signal<string[]>([]);
  protected postContent = signal('');
  protected isPosting = signal(false);
  protected isLoading = signal(true);
  protected commentInputs = signal<Record<string, string>>({});
  
  protected currentUser: any;

  constructor(
    protected communityService: CommunityService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getUser();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(tag: string = 'All posts'): void {
    this.isLoading.set(true);
    this.activeFilter.set(tag);
    this.communityService.getPosts(tag).subscribe({
      next: () => this.isLoading.set(false),
      error: () => this.isLoading.set(false)
    });
  }

  togglePostTag(tag: string): void {
    const current = this.selectedPostTags();
    if (current.includes(tag)) {
      this.selectedPostTags.set(current.filter(t => t !== tag));
    } else {
      this.selectedPostTags.set([...current, tag]);
    }
  }

  createPost(): void {
    if (!this.postContent().trim() || this.isPosting()) return;

    this.isPosting.set(true);
    this.communityService.createPost(this.postContent(), this.selectedPostTags()).subscribe({
      next: () => {
        this.postContent.set('');
        this.selectedPostTags.set([]);
        this.isPosting.set(false);
        this.loadPosts(this.activeFilter());
      },
      error: () => this.isPosting.set(false)
    });
  }

  likePost(postId: string): void {
    this.communityService.likePost(postId).subscribe();
  }

  updateCommentInput(postId: string, value: string): void {
    this.commentInputs.set({ ...this.commentInputs(), [postId]: value });
  }

  addComment(postId: string): void {
    const content = this.commentInputs()[postId];
    if (!content?.trim()) return;

    this.communityService.addComment(postId, content).subscribe({
      next: () => {
        this.updateCommentInput(postId, '');
      }
    });
  }

  getInitials(name: string): string {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : '?';
  }
}
