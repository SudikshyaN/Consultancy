import { Component } from '@angular/core';

import { SiteHeaderComponent } from '../../core/components/site-header/site-header';
import { ConsultationCtaComponent } from '../../shared/components/consultation-cta/consultation-cta';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section';
import { ServicesGridComponent } from '../../shared/components/services-grid/services-grid';
import { ProcessStripComponent} from '../../shared/components/process-strip/process-strip';
import { FooterComponent } from '../../core/components/site-footer/footer';
import { LoginComponent } from '../login/login';
import { Journey } from '../../shared/components/journey/journey';

import { BlogComponent } from '../blog/blog';
@Component({
  selector: 'app-home-page',
  imports: [
    ConsultationCtaComponent,
    HeroSectionComponent,
    ProcessStripComponent,
    ServicesGridComponent,
    SiteHeaderComponent,
    FooterComponent,
    // LoginComponent,

  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePageComponent {
  showAuthModal = false; 
  openModal() {
    this.showAuthModal = true;
  }
    closeModal() {
    this.showAuthModal = false;
  }
    proofItems = [
    'University shortlisting with budget guidance',
    'SOP, visa, and interview preparation support',
    'Personal counselor from first call to final departure'
  ];

  highlights = [
    { value: '800+', label: 'students guided' },
    { value: '8', label: 'partner countries' },
    { value: '94%', label: 'visa success support rate' }
  ];
}
