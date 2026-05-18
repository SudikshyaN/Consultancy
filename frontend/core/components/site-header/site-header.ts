import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../pages/login/login';
import { BlogComponent } from '../../../pages/blog/blog';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, ],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss'
})
export class SiteHeaderComponent {
  private readonly route = inject(Router)
  @Output() openAuth = new EventEmitter<void>(); 
  protected readonly navItems = [
    { label: 'Journey', path: '/#journey' },
    { label: 'freeTools', path: '/freetools' },
    { label: 'blog', path: '/blog' },
    { label: 'Finance', path: '/finance' },
    { label: 'About Us', path: '/about' },
    // { label: 'Login', path: '/login' },
    
  ];
  showAuthModal = false;

  openAuthModal() {
    this.showAuthModal = true;
  }

  closeAuthModal() {
    this.showAuthModal = false;
  }


  routes(path: string) {
    this.route.navigateByUrl(path)
  }
    triggerAuthModal() {
    this.openAuth.emit();
  }
}
