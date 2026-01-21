import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Home },
      { path: 'company', component: About }, // Placeholder
      { path: 'services', component: Home }, // Placeholder
      // Add other routes as needed or redirect to Home for demo
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];
