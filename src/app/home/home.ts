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
  Loader2
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

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }
}
