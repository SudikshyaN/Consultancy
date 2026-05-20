import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Video, VideoService } from '../../../services/video.service';
import { DestinationService } from '../../../services/destination.service';
import { Destination } from '../../../shared/data/destinations';

@Component({
  selector: 'app-admin-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-videos.html',
  styleUrl: './admin-videos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminVideosComponent implements OnInit {
  videos = signal<Video[]>([]);
  destinations = signal<Destination[]>([]);

  newVideo: Video = {
    title: '',
    url: '',
    thumbnailUrl: '',
    duration: '',
    author: '',
    views: '',
    category: '',
    country: 'All'
  };

  isSubmitting = signal(false);

  constructor(
    private videoService: VideoService,
    private destinationService: DestinationService
  ) { }

  ngOnInit() {
    this.loadVideos();
    this.loadDestinations();
  }

  loadVideos() {
    this.videoService.getVideos().subscribe({
      next: (data: Video[]) => {
        this.videos.set(data);
      },
      error: (err: any) => console.error('Failed to load videos', err)
    });
  }

  loadDestinations() {
    this.destinationService.listDestinations().subscribe({
      next: (response) => {
        this.destinations.set(response.destinations);
      },
      error: (err: any) => console.error('Failed to load destinations', err)
    });
  }

  onSubmit() {
    if (!this.newVideo.title || !this.newVideo.url) {
      alert('Title and URL are required');
      return;
    }

    this.isSubmitting.set(true);
    this.videoService.createVideo(this.newVideo).subscribe({
      next: (createdVideo) => {
        this.isSubmitting.set(false);
        this.videos.update(v => [createdVideo, ...v]);
        this.resetForm();
      },
      error: (err: any) => {
        console.error('Failed to create video', err);
        this.isSubmitting.set(false);
        alert('Failed to save video. Please try again.');
      }
    });
  }

  deleteVideo(id: string | undefined) {
    if (!id) return;

    if (confirm('Are you sure you want to delete this video?')) {
      this.videoService.deleteVideo(id).subscribe({
        next: () => {
          this.loadVideos();
        },
        error: (err: any) => {
          console.error('Failed to delete video', err);
          alert('Failed to delete video.');
        }
      });
    }
  }

  resetForm() {
    this.newVideo = {
      title: '',
      url: '',
      thumbnailUrl: '',
      duration: '',
      author: '',
      views: '',
      category: '',
      country: 'All'
    };
  }
}