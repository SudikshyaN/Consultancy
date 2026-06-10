import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunityService, CommunityPost, CommunityComment } from '../../../services/community.service';
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
  protected composerExpanded = signal(false);
  protected commentInputs = signal<Record<string, string>>({});

  // Edit post signals
  protected editingPostId = signal<string | null>(null);
  protected editPostContent = signal('');
  protected editPostTags = signal<string[]>([]);
  protected isSavingPost = signal(false);
  protected deletingPostId = signal<string | null>(null);
  protected postPendingDelete = signal<CommunityPost | null>(null);

  // Edit comment signals
  protected editingCommentKey = signal<string | null>(null); // format: "postId::commentId"
  protected editCommentContent = signal('');
  protected isSavingComment = signal(false);

  // Shared error
  protected saveError = signal('');

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
    this.selectedPostTags.set(
      current.includes(tag) ? current.filter(t => t !== tag) : [...current, tag]
    );
  }

  toggleEditPostTag(tag: string): void {
    const current = this.editPostTags();
    this.editPostTags.set(
      current.includes(tag) ? current.filter(t => t !== tag) : [...current, tag]
    );
  }

  createPost(): void {
    if (!this.postContent().trim() || this.isPosting()) return;

    this.isPosting.set(true);
    this.communityService.createPost(this.postContent(), this.selectedPostTags()).subscribe({
      next: () => {
        this.postContent.set('');
        this.selectedPostTags.set([]);
        this.isPosting.set(false);
        this.composerExpanded.set(false);
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
      next: () => this.updateCommentInput(postId, '')
    });
  }

  // ─── Post Edit ────────────────────────────────────────────────────────────

  isMyPost(post: CommunityPost): boolean {
    return !!this.currentUser?.id && post.author._id === this.currentUser.id;
  }

  startEditPost(post: CommunityPost): void {
    this.editingPostId.set(post._id);
    this.editPostContent.set(post.content);
    this.editPostTags.set([...post.tags]);
    // close any open comment edit
    this.editingCommentKey.set(null);
  }

  cancelEditPost(): void {
    this.editingPostId.set(null);
    this.editPostContent.set('');
    this.editPostTags.set([]);
    this.saveError.set('');
  }

  saveEditPost(postId: string): void {
    const content = this.editPostContent().trim();
    if (!content || this.isSavingPost()) return;

    this.saveError.set('');
    this.isSavingPost.set(true);
    this.communityService.editPost(postId, content, this.editPostTags()).subscribe({
      next: () => {
        this.isSavingPost.set(false);
        this.cancelEditPost();
      },
      error: (err) => {
        this.isSavingPost.set(false);
        this.saveError.set(err?.error?.message || 'Failed to save. Please try again.');
      }
    });
  }

  openDeleteConfirm(post: CommunityPost): void {
    if (!this.isMyPost(post) || this.deletingPostId()) return;
    this.postPendingDelete.set(post);
    this.saveError.set('');
  }

  closeDeleteConfirm(): void {
    if (this.deletingPostId()) return;
    this.postPendingDelete.set(null);
    this.saveError.set('');
  }

  deletePost(): void {
    const post = this.postPendingDelete();
    if (!post || !this.isMyPost(post) || this.deletingPostId()) return;

    this.saveError.set('');
    this.deletingPostId.set(post._id);
    this.communityService.deletePost(post._id).subscribe({
      next: () => {
        if (this.editingPostId() === post._id) {
          this.cancelEditPost();
        }
        this.deletingPostId.set(null);
        this.postPendingDelete.set(null);
      },
      error: (err) => {
        this.deletingPostId.set(null);
        this.saveError.set(err?.error?.message || 'Failed to delete post. Please try again.');
      }
    });
  }

  // ─── Comment Edit ─────────────────────────────────────────────────────────

  isMyComment(comment: CommunityComment): boolean {
    return !!this.currentUser?.id && comment.author._id === this.currentUser.id;
  }

  commentEditKey(postId: string, commentId: string): string {
    return `${postId}::${commentId}`;
  }

  startEditComment(postId: string, comment: CommunityComment): void {
    this.editingCommentKey.set(this.commentEditKey(postId, comment._id));
    this.editCommentContent.set(comment.content);
    // close post edit if any
    this.editingPostId.set(null);
  }

  cancelEditComment(): void {
    this.editingCommentKey.set(null);
    this.editCommentContent.set('');
    this.saveError.set('');
  }

  saveEditComment(postId: string, commentId: string): void {
    const content = this.editCommentContent().trim();
    if (!content || this.isSavingComment()) return;

    this.saveError.set('');
    this.isSavingComment.set(true);
    this.communityService.editComment(postId, commentId, content).subscribe({
      next: () => {
        this.isSavingComment.set(false);
        this.cancelEditComment();
      },
      error: (err) => {
        this.isSavingComment.set(false);
        this.saveError.set(err?.error?.message || 'Failed to save comment. Please try again.');
      }
    });
  }

  getInitials(name: string): string {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : '?';
  }
}
