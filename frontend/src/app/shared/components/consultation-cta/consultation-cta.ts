import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultation-cta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consultation-cta.html',
  styleUrl: './consultation-cta.scss'
})
export class ConsultationCtaComponent {
  studentName = '';
  studentPhone = '';
  preferredCountry = '';
  budgetRange = '';
  isSubmitted = false;

  submitRequest(event: Event) {
    event.preventDefault();
    if (this.studentName && this.studentPhone) {
      this.isSubmitted = true;
      
      // Simulate API submit delay
      setTimeout(() => {
        this.isSubmitted = false;
        this.studentName = '';
        this.studentPhone = '';
        this.preferredCountry = '';
        this.budgetRange = '';
        alert('Thank you! Our expert education counselor will call you within 24 hours.');
      }, 800);
    }
  }
}
