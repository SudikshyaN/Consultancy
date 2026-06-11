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
  protected successMessage = signal('');
  protected errorMsg = signal('');

  protected formData = {
    livingCost: '',
    tuition: '',
    visaFee: '',
    partTimeWork: '',
    ieltsRequirement: '',
    costBreakdown: { rent: '', food: '', transport: '', bills: '', personal: '' },
    roadmap: [] as any[]
  };

  getTotalCost(): string {
    const cb = this.formData.costBreakdown;
    if (!cb) return '—';
    
    let totalMin = 0;
    let totalMax = 0;
    
    const fields = [cb.rent, cb.food, cb.transport, cb.bills, cb.personal];
    for (const field of fields) {
      const [min, max] = this.getRangeBounds(field);
      totalMin += min;
      totalMax += max;
    }
    
    if (totalMin === 0 && totalMax === 0) return '—';
    if (totalMin === totalMax) return totalMin.toLocaleString();
    return `${totalMin.toLocaleString()}–${totalMax.toLocaleString()}`;
  }

  private getRangeBounds(value: any): [number, number] {
    if (value === null || value === undefined) return [0, 0];
    if (typeof value === 'number') return [value, value];
    
    const cleanStr = String(value).replace(/,/g, '');
    const matches = cleanStr.match(/\d+(\.\d+)?/g);
    if (!matches || matches.length === 0) return [0, 0];
    
    const numbers = matches.map(Number);
    if (numbers.length === 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[1]];
  }

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
        rent: (country.costBreakdown?.rent !== undefined && country.costBreakdown?.rent !== null && country.costBreakdown?.rent !== 0 && country.costBreakdown?.rent !== '0') ? String(country.costBreakdown.rent) : '',
        food: (country.costBreakdown?.food !== undefined && country.costBreakdown?.food !== null && country.costBreakdown?.food !== 0 && country.costBreakdown?.food !== '0') ? String(country.costBreakdown.food) : '',
        transport: (country.costBreakdown?.transport !== undefined && country.costBreakdown?.transport !== null && country.costBreakdown?.transport !== 0 && country.costBreakdown?.transport !== '0') ? String(country.costBreakdown.transport) : '',
        bills: (country.costBreakdown?.bills !== undefined && country.costBreakdown?.bills !== null && country.costBreakdown?.bills !== 0 && country.costBreakdown?.bills !== '0') ? String(country.costBreakdown.bills) : '',
        personal: (country.costBreakdown?.personal !== undefined && country.costBreakdown?.personal !== null && country.costBreakdown?.personal !== 0 && country.costBreakdown?.personal !== '0') ? String(country.costBreakdown.personal) : ''
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
