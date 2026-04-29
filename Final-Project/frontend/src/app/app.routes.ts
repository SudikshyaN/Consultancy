import { Routes } from '@angular/router';
import { DestinationDetailComponent } from './pages/destination-detail-page/destination-detail-page';
import { HomePageComponent } from './pages/home-page/home-page';
import { FreeToolsComponent } from './pages/freeTool/freetool';
import { AboutComponent } from './pages/about /about';
import { BlogComponent } from './pages/blog/blog';
import { LoginComponent } from './pages/login/login';
import { FinanceComponent } from './pages/finance/finance';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AuthGuard } from './pages/login/auth.guard';
import { DashboardMainComponent } from './pages/dashboard/main/main';
import { ProfileComponent } from './pages/dashboard/profile/profile';
import { DashboardWishlistComponent } from './pages/dashboard/wishlist/wishlist';
import { DashboardCommunityComponent } from './pages/dashboard/community/community';
import { DashboardUniversitiesComponent } from './pages/dashboard/universities/universities';
import { DashboardFreeToolsComponent } from './pages/dashboard/free-tools/free-tools';
import { AdminAuthComponent } from './pages/admin/auth/admin-auth';
import { AdminShellComponent } from './pages/admin/admin-shell/admin-shell';
import { BlankAdminPageComponent } from './pages/admin/blank/blank-admin';
import { AdminUniversitiesComponent } from './pages/admin/universities/admin-universities';


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
    path: 'freetools',
    component: FreeToolsComponent
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
    path: 'finance',
    component: FinanceComponent
  },



  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'admin/login',
    component: AdminAuthComponent
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
        path: 'free-tools',
        component: DashboardFreeToolsComponent,
        title: 'Free Tools | Dashboard',
      },
      {
        path: 'wishlist',
        component: DashboardWishlistComponent
      },
      {
        path: 'community',
        component: DashboardCommunityComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: BlankAdminPageComponent
      },
      {
        path: 'universities',
        component: AdminUniversitiesComponent
      },
      {
        path: 'users',
        component: BlankAdminPageComponent
      },
      {
        path: 'visa-guides',
        component: BlankAdminPageComponent
      },
      {
        path: 'community',
        component: BlankAdminPageComponent
      },
      {
        path: 'settings',
        component: BlankAdminPageComponent
      }
    ]
  },

  
];
