import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Layout } from '../layout/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  imports: [Layout],
  styleUrls: ['./about.scss'],
  standalone: true
})
export class AboutComponent {

  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }

}