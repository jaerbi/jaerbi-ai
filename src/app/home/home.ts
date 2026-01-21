import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Sun, 
  Moon, 
  Building2, 
  ChevronDown,
  Globe,
  FileText,
  FileSpreadsheet,
  Palette,
  Loader2,
  MapPin,
  FolderOpen,
  UserCheck,
  ArrowRight,
  File
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Icons
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  readonly BuildingIcon = Building2;
  readonly ChevronDownIcon = ChevronDown;
  readonly LoaderIcon = Loader2;
  readonly ArrowRightIcon = ArrowRight;
  readonly FileIcon = File;

  isDarkMode = signal(false);

  services = [
    {
      title: 'Start a new business',
      description: 'Form your Company entity in any U.S. state. Fast, reliable, and tailored for both residents and non-residents.',
      icon: Globe,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Legal Technology',
      description: 'Manage compliance with ease, annual reports, amendments, contracts, and trademarks all in one place.',
      icon: FileText,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Tax Filling',
      description: 'Streamline your tax filings with guided workflows, expert support, and compliance reminders.',
      icon: FileSpreadsheet,
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      title: 'eDesign & Marketing',
      description: 'Build your brand with logo design, websites, and marketing tools to help your business grow.',
      icon: Palette,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  companyActions = signal([
    {
      title: 'Business Infomation',
      subtitle: 'View your company details',
      icon: FileText,
      badge: null,
      actionNeeded: false
    },
    {
      title: 'Business Address',
      subtitle: 'Set up your physical business address',
      icon: MapPin,
      badge: 'Action needed',
      actionNeeded: true
    },
    {
      title: 'Documents Hub',
      subtitle: 'Track and manage your documents',
      icon: FolderOpen,
      badge: '2',
      badgeType: 'notification',
      actionNeeded: false
    },
    {
      title: 'Identity Documentation',
      subtitle: 'Upload your identity documents',
      icon: UserCheck,
      badge: 'Action needed',
      actionNeeded: true
    }
  ]);

  mailboxItems = signal([
    {
      title: 'Official Document Scanned',
      description: 'Hello [First Name], We\'ve scanned your latest business correspondence (e.g., from IRS, bank, or client)....',
      type: 'pdf',
      status: 'New',
      color: 'bg-red-500'
    },
    {
      title: 'Official Document Scanned',
      description: 'Hello [First Name], We\'ve scanned your latest business correspondence (e.g., from IRS, bank, or client)....',
      type: 'doc',
      status: 'New',
      color: 'bg-blue-500'
    },
    {
      title: 'Official Document Scanned',
      description: 'Hello [First Name], We\'ve scanned your latest business correspondence (e.g., from IRS, bank, or client)....',
      type: 'doc',
      status: 'New',
      color: 'bg-blue-500'
    }
  ]);

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }
}
