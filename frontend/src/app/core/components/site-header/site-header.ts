import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../pages/login/login';
import { BlogComponent } from '../../../pages/blog/blog';
import { AuthService } from '../../../services/auth.services';
@Component({
  selector: 'app-site-header',
  imports: [RouterLink, ],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss'
})
export class SiteHeaderComponent {
  private readonly route = inject(Router);
  @Output() openAuth = new EventEmitter<void>(); 
  
  protected readonly navItems = [
    { label: 'Journey', path: '/#journey' },
    { label: 'Blog', path: '/blog' },
    { label: 'About Us', path: '/about' },
  ];
  
  showAuthModal = false;
  isMobileMenuOpen = false;

  openAuthModal() {
    this.showAuthModal = true;
  }

  closeAuthModal() {
    this.showAuthModal = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  routes(path: string) {
    this.closeMobileMenu();
    this.route.navigateByUrl(path);
  }

  triggerAuthModal() {
    this.openAuth.emit();
  }
}
