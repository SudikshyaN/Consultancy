import { Routes } from '@angular/router';
import { DestinationDetailComponent } from './pages/destination-detail-page/destination-detail-page';
import { HomePageComponent } from './pages/home-page/home-page';

import { AboutComponent } from './pages/about /about';
import { BlogComponent } from './pages/blog/blog';
import { LoginComponent } from './pages/login/login';

import { DashboardComponent } from './pages/dashboard/dashboard';
import { AdminGuard, AdminGuestGuard, AuthGuard, GuestGuard } from './pages/login/auth.guard';
import { DashboardMainComponent } from './pages/dashboard/main/main';
import { ProfileComponent } from './pages/dashboard/profile/profile';
import { DashboardCountryComponent } from './pages/dashboard/country/country';
import { DashboardCommunityComponent } from './pages/dashboard/community/community';
import { AdminCountryComponent } from './pages/admin/country/country';
import { DashboardUniversitiesComponent } from './pages/dashboard/universities/universities';
import { AdminAuthComponent } from './pages/admin/auth/admin-auth';
import { AdminShellComponent } from './pages/admin/admin-shell/admin-shell';
import { AdminUniversitiesComponent } from './pages/admin/universities/admin-universities';
import { DashboardCountryDetailComponent } from './pages/dashboard/country-detail/country-detail';
import { DashboardSopMakerComponent } from './pages/dashboard/sop-maker/sop-maker';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'destinations/:slug',
    component: DestinationDetailComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },



  {
    path: 'login',
    component : LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'admin/login',
    component: AdminAuthComponent,
    canActivate: [AdminGuestGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        
        component: DashboardMainComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile | Dashboard',
      },
      {
        path: 'universities',
        component: DashboardUniversitiesComponent,
        title: 'Universities | Dashboard',
      },

      {
        path: 'country',
        component: DashboardCountryComponent
      },
      {
        path: 'country/:slug',
        component: DashboardCountryDetailComponent
      },
      {
        path: 'videos',
        loadComponent: () => import('./pages/dashboard/videos/videos').then(m => m.DashboardVideosComponent),
        title: 'Videos | Dashboard'
      },
      {
        path: 'community',
        component: DashboardCommunityComponent
      },
      {
        path: 'sop-maker',
        component: DashboardSopMakerComponent,
        title: 'SOP Maker | Dashboard'
      }
    ]
  },
  {
    path: 'admin',
    component: AdminShellComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'universities'
      },
      {
        path: 'universities',
        component: AdminUniversitiesComponent
      },
      {
        path: 'countries',
        component: AdminCountryComponent,
        title: 'Countries | Admin'
      },
      {
        path: 'videos',
        loadComponent: () => import('./pages/admin/videos/admin-videos').then(m => m.AdminVideosComponent),
        title: 'Video Upload | Admin'
      }
    ]
  },

  
];
