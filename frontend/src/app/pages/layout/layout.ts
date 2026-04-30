import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../../core/components/site-header/site-header';
import { FooterComponent } from '../../core/components/site-footer/footer';
import { BlogComponent } from '../blog/blog';

@Component({
  selector: 'app-layout',
  imports: [
    SiteHeaderComponent,
    FooterComponent,
  
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  showAuthModal = false; 

  openModal() {
    this.showAuthModal = true;
  }
      closeModal() {
    this.showAuthModal = false;
  }
}
