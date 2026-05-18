import { Component } from '@angular/core';
import { Layout } from '../layout/layout';
@Component({
  selector: 'app-finance',
   imports: [Layout],
  templateUrl: './finance.html',
  styleUrls: ['./finance.scss']
})
export class FinanceComponent {

  isDropdownOpen = false;

  countries = ['Australia', 'USA', 'UK', 'Germany'];

  selectedCountry = 'Australia';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: string, event: Event) {
    event.stopPropagation();
    this.selectedCountry = country;
    this.isDropdownOpen = false;
  }
}