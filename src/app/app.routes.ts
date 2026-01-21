import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { 
  CompanyPlaceholderComponent,
  ServicesPlaceholderComponent,
  TaxPlaceholderComponent,
  MarketingPlaceholderComponent,
  LegalPlaceholderComponent,
  MailboxPlaceholderComponent,
  BillingPlaceholderComponent,
  SettingsPlaceholderComponent,
  SupportPlaceholderComponent
} from './features/placeholders';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'company', component: CompanyPlaceholderComponent },
      { path: 'services', component: ServicesPlaceholderComponent },
      { path: 'tax', component: TaxPlaceholderComponent },
      { path: 'marketing', component: MarketingPlaceholderComponent },
      { path: 'legal', component: LegalPlaceholderComponent },
      { path: 'mailbox', component: MailboxPlaceholderComponent },
      { path: 'billing', component: BillingPlaceholderComponent },
      { path: 'settings', component: SettingsPlaceholderComponent },
      { path: 'support', component: SupportPlaceholderComponent },
      // Wildcard
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];
