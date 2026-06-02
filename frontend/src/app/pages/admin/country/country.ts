import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
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
  protected successMessage = signal('');
  protected errorMsg = signal('');

  protected formData = {
    livingCost: '',
    tuition: '',
    visaFee: '',
    partTimeWork: '',
    ieltsRequirement: '',
    costBreakdown: { rent: 0, food: 0, transport: 0, bills: 0, personal: 0 },
    roadmap: [] as any[]
  };

  protected totalCost = computed(() => {
    const cb = this.formData.costBreakdown;
    const total = (cb.rent || 0) + (cb.food || 0) + (cb.transport || 0) + (cb.bills || 0) + (cb.personal || 0);
    return total > 0 ? total.toLocaleString() : '—';
  });

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.isLoading.set(true);
    this.destinationService.listDestinations().subscribe({
      next: (res) => {
        this.countries.set(res.destinations);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMsg.set('Failed to load countries.');
        this.isLoading.set(false);
      }
    });
  }

  onSelectCountry(country: Destination): void {
    this.selectedCountry.set(country);
    this.successMessage.set('');
    this.errorMsg.set('');
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
    };
  }

  addRoadmapStep(): void {
    this.formData.roadmap.push({ title: '', duration: '', description: '', tags: [], checklist: [] });
  }

  removeRoadmapStep(index: number): void {
    this.formData.roadmap.splice(index, 1);
  }

  addChecklistItem(stepIndex: number): void {
    this.formData.roadmap[stepIndex].checklist.push({ task: '' });
  }

  removeChecklistItem(stepIndex: number, itemIndex: number): void {
    this.formData.roadmap[stepIndex].checklist.splice(itemIndex, 1);
  }

  addTag(stepIndex: number, event: any): void {
    const value = (event.target.value || '').trim();
    if (value) {
      if (!this.formData.roadmap[stepIndex].tags) {
        this.formData.roadmap[stepIndex].tags = [];
      }
      this.formData.roadmap[stepIndex].tags.push(value);
      event.target.value = '';
    }
  }

  removeTag(stepIndex: number, tagIndex: number): void {
    this.formData.roadmap[stepIndex].tags.splice(tagIndex, 1);
  }

  saveCountry(): void {
    const country = this.selectedCountry();
    if (!country?._id) return;

    this.isSaving.set(true);
    this.successMessage.set('');
    this.errorMsg.set('');

    this.destinationService.updateDestination(country._id, this.formData).subscribe({
      next: (res) => {
        this.countries.set(
          this.countries().map(c => c._id === res.destination._id ? res.destination : c)
        );
        this.selectedCountry.set(res.destination);
        this.isSaving.set(false);
        this.successMessage.set(`${res.destination.name} updated successfully.`);
        setTimeout(() => this.successMessage.set(''), 3500);
      },
      error: () => {
        this.errorMsg.set('Failed to save changes. Please try again.');
        this.isSaving.set(false);
      }
    });
  }
}
