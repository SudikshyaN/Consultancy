import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video, VideoService } from '../../../services/video.service';
import { DestinationService } from '../../../services/destination.service';
import { Destination } from '../../../shared/data/destinations';

@Component({
  selector: 'app-dashboard-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class DashboardVideosComponent implements OnInit {
  videos = signal<Video[]>([]);
  destinations = signal<Destination[]>([]);
  activeCountry = signal<string>('All');
  searchQuery = signal<string>('');

  filteredVideos = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.videos();
    return this.videos().filter(v => v.title.toLowerCase().includes(query));
  });

  constructor(
    private videoService: VideoService,
    private destinationService: DestinationService
  ) { }

  ngOnInit() {
    this.loadDestinations();
    this.loadVideos();
  }

  loadDestinations() {
    this.destinationService.listDestinations().subscribe({
      next: (response) => {
        this.destinations.set(response.destinations);
      },
      error: (err: any) => console.error('Failed to load destinations', err)
    });
  }

  loadVideos(country: string = 'All') {
    this.videoService.getVideos(country).subscribe({
      next: (data: Video[]) => {
        this.videos.set(data);
      },
      error: (err: any) => console.error('Failed to load videos', err)
    });
  }

  setCountryFilter(country: string) {
    this.activeCountry.set(country);
    this.loadVideos(country);
  }



  onSearch(event: any) {
    this.searchQuery.set(event.target.value);
  }
}
