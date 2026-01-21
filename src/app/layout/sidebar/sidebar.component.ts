import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  LucideAngularModule, 
  LayoutDashboard, 
  Briefcase, 
  ScrollText, 
  Calculator, 
  Rocket, 
  Scale, 
  Mail, 
  CreditCard, 
  User, 
  MessageCircle, 
  Menu,
  X,
  ChevronRight
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <!-- Mobile Overlay -->
    <div 
      *ngIf="isOpen()" 
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      (click)="toggleSidebar()"
    ></div>

    <!-- Sidebar -->
    <aside 
      class="fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static"
      [class.translate-x-0]="isOpen()"
      [class.-translate-x-full]="!isOpen()"
    >
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="h-16 flex items-center px-6 border-b border-gray-50">
          <span class="text-xl font-bold text-slate-900 tracking-tight">BLUGENCY</span>
          <button class="ml-auto lg:hidden" (click)="toggleSidebar()">
            <lucide-icon [img]="XIcon" class="w-5 h-5 text-gray-500"></lucide-icon>
          </button>
        </div>

        <!-- Navigation -->
        <div class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <ng-container *ngFor="let item of menuItems">
            <a 
              [routerLink]="item.path" 
              routerLinkActive="bg-blue-50 text-blue-600" 
              class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group"
            >
              <lucide-icon [img]="item.icon" class="w-5 h-5 transition-colors group-hover:text-gray-900" [class.text-blue-600]="false"></lucide-icon>
              {{ item.label }}
            </a>
          </ng-container>
        </div>

        <!-- Bottom Menu -->
        <div class="p-3 border-t border-gray-50 space-y-1">
          <ng-container *ngFor="let item of bottomItems">
            <a 
              [routerLink]="item.path"
              class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <lucide-icon [img]="item.icon" class="w-5 h-5"></lucide-icon>
              {{ item.label }}
            </a>
          </ng-container>
        </div>

        <!-- User Profile -->
        <div class="p-4 border-t border-gray-50">
          <div class="flex items-center gap-3">
            <img 
              src="https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff" 
              alt="User" 
              class="w-9 h-9 rounded-full bg-gray-200"
            >
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">John Smith</p>
              <p class="text-xs text-gray-500 truncate">jsmith@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Mobile Toggle Button (Visible only when closed on mobile) -->
    <button 
      *ngIf="!isOpen()"
      (click)="toggleSidebar()"
      class="fixed top-4 left-4 z-30 p-2 bg-white rounded-lg shadow-sm border border-gray-200 lg:hidden"
    >
      <lucide-icon [img]="MenuIcon" class="w-5 h-5 text-gray-600"></lucide-icon>
    </button>
  `
})
export class SidebarComponent {
  isOpen = signal(false);

  // Icons
  readonly XIcon = X;
  readonly MenuIcon = Menu;

  menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'My Company', path: '/company', icon: Briefcase },
    { label: 'Services', path: '/services', icon: ScrollText },
    { label: 'Tax and Accounting', path: '/tax', icon: Calculator },
    { label: 'eDesign & Marketing', path: '/marketing', icon: Rocket },
    { label: 'Legal Tech', path: '/legal', icon: Scale },
    { label: 'Mailbox', path: '/mailbox', icon: Mail },
  ];

  bottomItems = [
    { label: 'Billing & Subscription', path: '/billing', icon: CreditCard },
    { label: 'Account settings', path: '/settings', icon: User },
    { label: 'Help & Support', path: '/support', icon: MessageCircle },
  ];

  toggleSidebar() {
    this.isOpen.update(v => !v);
  }
}
