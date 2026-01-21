import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Globe,
  FileText,
  FileSpreadsheet,
  Palette,
  Loader2,
  MapPin,
  FolderOpen,
  UserCheck,
  ArrowRight,
  File,
  Building2
} from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <!-- Main Content Area (Left Column) -->
      <div class="xl:col-span-2 space-y-8">
        
        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            *ngFor="let service of services"
            class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="flex items-start gap-4">
              <div [class]="'p-3 rounded-xl ' + service.color">
                <lucide-icon [img]="service.icon" class="w-8 h-8"></lucide-icon>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-900 mb-1">{{ service.title }}</h3>
                <p class="text-sm text-gray-500 leading-relaxed">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Orders Section -->
        <section class="space-y-4">
          <div>
            <h2 class="text-lg font-bold text-gray-900">Orders</h2>
            <p class="text-sm text-gray-500">Track your order status</p>
          </div>

          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
            <div class="p-3 bg-blue-50 rounded-full">
              <lucide-icon [img]="LoaderIcon" class="w-6 h-6 text-blue-600 animate-spin-slow"></lucide-icon>
            </div>
            
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h3 class="font-bold text-gray-900">Company Formation</h3>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  In progress
                </span>
              </div>
              <p class="text-sm text-gray-500">LLC / State of Delaware</p>
              
              <!-- Progress Bar (Visual Only) -->
              <div class="mt-3 w-full bg-gray-100 rounded-full h-1.5">
                <div class="bg-blue-600 h-1.5 rounded-full" style="width: 45%"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Mailbox Section -->
        <section class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <h2 class="text-lg font-bold text-gray-900">Mailbox</h2>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">3 unread mails</span>
            </div>
            <button class="text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg px-3 py-1.5 bg-white">Read all</button>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            <div *ngFor="let mail of mailboxItems()" class="p-4 flex gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div class="flex-shrink-0">
                 <!-- Placeholder for File Icon -->
                 <div [class]="'w-10 h-10 rounded-lg flex items-center justify-center ' + (mail.type === 'pdf' ? 'bg-red-50' : 'bg-blue-50')">
                   <lucide-icon [img]="FileIcon" [class]="'w-5 h-5 ' + (mail.type === 'pdf' ? 'text-red-500' : 'text-blue-500')"></lucide-icon>
                 </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between">
                  <h3 class="text-sm font-bold text-gray-900 truncate">{{ mail.title }}</h3>
                  <span *ngIf="mail.status === 'New'" class="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
                    {{ mail.status }}
                  </span>
                </div>
                <p class="text-sm text-gray-500 mt-0.5 line-clamp-1">{{ mail.description }}</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <!-- Right Panel (Company Info) -->
      <div class="xl:col-span-1 space-y-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
          <!-- Company Header -->
          <div class="flex items-center gap-3 mb-8">
            <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
              <lucide-icon [img]="BuildingIcon" class="w-6 h-6 text-white"></lucide-icon>
            </div>
            <div>
              <p class="text-xs text-gray-500">Company name</p>
              <h2 class="text-lg font-bold text-gray-900">Inity Agency LLC</h2>
            </div>
          </div>

          <!-- Action List -->
          <div class="space-y-4">
            <div 
              *ngFor="let action of companyActions()"
              class="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer"
            >
              <div class="p-2 rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all">
                <lucide-icon [img]="action.icon" class="w-5 h-5 text-gray-600"></lucide-icon>
              </div>
              
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-gray-900">{{ action.title }}</h3>
                <p class="text-xs text-gray-500 truncate mt-0.5">{{ action.subtitle }}</p>
                
                <!-- Badges -->
                <div *ngIf="action.badge" class="mt-2">
                   <span 
                     *ngIf="action.actionNeeded"
                     class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-orange-100 text-orange-700 border border-orange-200"
                   >
                     {{ action.badge }}
                   </span>
                   <span 
                     *ngIf="!action.actionNeeded"
                     class="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-blue-600 text-white"
                   >
                     {{ action.badge }}
                   </span>
                </div>
              </div>

              <lucide-icon [img]="ArrowRightIcon" class="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"></lucide-icon>
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  // Icons
  readonly BuildingIcon = Building2;
  readonly LoaderIcon = Loader2;
  readonly ArrowRightIcon = ArrowRight;
  readonly FileIcon = File;

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
}
