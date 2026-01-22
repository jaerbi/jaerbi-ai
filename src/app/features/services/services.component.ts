import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedServicesCardComponent } from './animated-services-card.component';
import { LucideAngularModule, Rocket, Lightbulb, Zap } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AnimatedServicesCardComponent, LucideAngularModule],
  template: `
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Our Services</h2>
        <p class="text-gray-500 mt-2">Explore our premium solutions powered by innovation.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <app-animated-services-card>
          <div class="bg-white/80 backdrop-blur-md p-4 rounded-full mb-4 shadow-sm">
            <lucide-icon [img]="RocketIcon" class="w-8 h-8 text-blue-600"></lucide-icon>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Business Growth</h3>
          <p class="text-sm text-gray-600 max-w-[200px]">Accelerate your company formation and scaling with our tools.</p>
        </app-animated-services-card>

        <!-- Card 2 -->
        <app-animated-services-card>
          <div class="bg-white/80 backdrop-blur-md p-4 rounded-full mb-4 shadow-sm">
            <lucide-icon [img]="LightbulbIcon" class="w-8 h-8 text-blue-600"></lucide-icon>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Creative Solutions</h3>
          <p class="text-sm text-gray-600 max-w-[200px]">Innovative design and marketing strategies for your brand.</p>
        </app-animated-services-card>

        <!-- Card 3 -->
        <app-animated-services-card>
          <div class="bg-white/80 backdrop-blur-md p-4 rounded-full mb-4 shadow-sm">
            <lucide-icon [img]="ZapIcon" class="w-8 h-8 text-blue-600"></lucide-icon>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Fast Execution</h3>
          <p class="text-sm text-gray-600 max-w-[200px]">Automated workflows to get things done in record time.</p>
        </app-animated-services-card>
      </div>
    </div>
  `
})
export class ServicesComponent {
  readonly RocketIcon = Rocket;
  readonly LightbulbIcon = Lightbulb;
  readonly ZapIcon = Zap;
}
