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
import { DashboardProfileComponent } from './pages/dashboard/profile/profile';
import { DashboardWishlistComponent } from './pages/dashboard/wishlist/wishlist';
import { DashboardCommunityComponent } from './pages/dashboard/community/community';


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
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardMainComponent
      },
      {
        path: 'profile',
        component: DashboardProfileComponent
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

  
];
