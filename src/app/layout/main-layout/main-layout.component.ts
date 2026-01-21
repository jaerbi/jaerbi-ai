import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { 
  LucideAngularModule, 
  Sun, 
  Moon, 
  Building2
} from 'lucide-angular';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, LucideAngularModule],
  template: `
    <div class="flex min-h-screen bg-gray-50/50">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>

      <!-- Main Content -->
      <main class="flex-1 lg:ml-64 min-h-screen flex flex-col">
        <!-- Header -->
        <header class="h-20 px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 bg-white sticky top-0 z-30">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Good Morning, Anas! 👋</h1>
          </div>

          <div class="flex items-center gap-4">
            <!-- Theme Switcher -->
            <button 
              (click)="toggleTheme()"
              class="flex items-center gap-2 p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <lucide-icon [img]="SunIcon" class="w-5 h-5 text-gray-500" [class.text-yellow-500]="!isDarkMode()"></lucide-icon>
              <lucide-icon [img]="MoonIcon" class="w-5 h-5 text-gray-500" [class.text-blue-500]="isDarkMode()"></lucide-icon>
            </button>

            <!-- Organization Selector -->
            <button class="hidden md:flex items-center gap-3 px-3 py-2 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <lucide-icon [img]="BuildingIcon" class="w-4 h-4 text-white"></lucide-icon>
              </div>
              <div class="text-left">
                <p class="text-xs font-medium text-gray-900">Inity</p>
                <p class="text-[10px] text-gray-500">Organization</p>
              </div>
            </button>

            <!-- User Profile (Top Right) -->
            <button class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://ui-avatars.com/api/?name=Anas&background=random" alt="User" class="w-full h-full object-cover">
            </button>
          </div>
        </header>

        <!-- Content Area -->
        <div class="flex-1 p-8 max-w-[1600px] w-full mx-auto">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
export class MainLayoutComponent {
  // Icons
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  readonly BuildingIcon = Building2;

  isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }
}
