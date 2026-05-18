import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DestinationService } from '../../../services/destination.service';
import { Destination } from '../../../shared/data/destinations';

@Component({
  selector: 'app-admin-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class AdminCountryComponent implements OnInit {
  protected countries = signal<Destination[]>([]);
  protected selectedCountry = signal<Destination | null>(null);
  protected isLoading = signal(true);
  protected isSaving = signal(false);

  // Form values
  protected formData = {
    livingCost: '',
    tuition: '',
    visaFee: '',
    partTimeWork: '',
    ieltsRequirement: '',
    costBreakdown: {
      rent: 0,
      food: 0,
      transport: 0,
      bills: 0,
      personal: 0
    },
    roadmap: [] as any[]
  };

  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.isLoading.set(true);
    this.destinationService.listDestinations().subscribe({
      next: (res) => {
        this.countries.set(res.destinations);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading countries:', err);
        this.isLoading.set(false);
      }
    });
  }

  onSelectCountry(country: Destination) {
    this.selectedCountry.set(country);
    this.formData = {
      livingCost: country.livingCost || '',
      tuition: country.tuition || '',
      visaFee: country.visaFee || '',
      partTimeWork: country.partTimeWork || '',
      ieltsRequirement: country.ieltsRequirement || '',
      costBreakdown: {
        rent: country.costBreakdown?.rent || 0,
        food: country.costBreakdown?.food || 0,
        transport: country.costBreakdown?.transport || 0,
        bills: country.costBreakdown?.bills || 0,
      personal: country.costBreakdown?.personal || 0
      },
      roadmap: country.roadmap ? JSON.parse(JSON.stringify(country.roadmap)) : []
    } as any;
  }

  addRoadmapStep() {
    this.formData.roadmap.push({
      title: '',
      duration: '',
      description: '',
      tags: [],
      checklist: []
    });
  }

  removeRoadmapStep(index: number) {
    this.formData.roadmap.splice(index, 1);
  }

  addChecklistItem(stepIndex: number) {
    this.formData.roadmap[stepIndex].checklist.push({ task: '' });
  }

  removeChecklistItem(stepIndex: number, itemIndex: number) {
    this.formData.roadmap[stepIndex].checklist.splice(itemIndex, 1);
  }

  addTag(stepIndex: number, event: any) {
    const value = event.target.value.trim();
    if (value) {
      if (!this.formData.roadmap[stepIndex].tags) {
        this.formData.roadmap[stepIndex].tags = [];
      }
      this.formData.roadmap[stepIndex].tags.push(value);
      event.target.value = '';
    }
  }

  removeTag(stepIndex: number, tagIndex: number) {
    this.formData.roadmap[stepIndex].tags.splice(tagIndex, 1);
  }

  saveCountry() {
    const country = this.selectedCountry();
    if (!country || !country._id) return;

    this.isSaving.set(true);
    this.destinationService.updateDestination(country._id, this.formData).subscribe({
      next: (res) => {
        // Update local state
        this.countries.set(
          this.countries().map(c => c._id === res.destination._id ? res.destination : c)
        );
        this.selectedCountry.set(res.destination);
        this.isSaving.set(false);
        // Optional: show success message
      },
      error: (err) => {
        console.error('Error saving country:', err);
        this.isSaving.set(false);
      }
    });
  }
}
