import { Routes } from '@angular/router';
import { DestinationDetailComponent } from './pages/destination-detail-page/destination-detail-page';
import { HomePageComponent } from './pages/home-page/home-page';
import { FreeToolsComponent } from './pages/freeTool/freetool';
import { AboutComponent } from './pages/about /about';
import { BlogComponent } from './pages/blog/blog';
import { LoginComponent } from './pages/login/login';
import { FinanceComponent } from './pages/finance/finance';


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
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },
  
];
