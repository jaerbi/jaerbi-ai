import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-services-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full h-64 rounded-3xl overflow-hidden bg-blue-50/50 backdrop-blur-sm border border-white/20 shadow-lg group cursor-pointer transition-transform hover:scale-[1.02]">
      
      <!-- Background Shapes Container -->
      <div class="absolute inset-0 overflow-hidden">
        
        <!-- Shape 1: Large Blue Triangle (Bottom Right) -->
        <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 opacity-90 animate-float-slow"
             style="clip-path: polygon(100% 0, 0% 100%, 100% 100%); animation-delay: 0s;">
        </div>

        <!-- Shape 2: Light Blue Triangle (Top Left) -->
        <div class="absolute -top-8 -left-8 w-40 h-40 bg-blue-200/50 animate-float-medium"
             style="clip-path: polygon(0 0, 0% 100%, 100% 0); animation-delay: -2s;">
        </div>

        <!-- Shape 3: Small Floating Triangle (Middle Right) -->
        <div class="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-400/30 animate-float-fast"
             style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%); animation-delay: -5s;">
        </div>

        <!-- Shape 4: Tiny Triangle (Bottom Left) -->
        <div class="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-300/40 animate-float-variable"
             style="clip-path: polygon(100% 0, 0% 100%, 100% 100%); animation-delay: -1s;">
        </div>

      </div>

      <!-- Content Overlay -->
      <div class="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
        <ng-content></ng-content>
      </div>
      
    </div>
  `,
  styles: [`
    @keyframes float {
      0% { transform: translate(0, 0) rotate(0deg) scale(1); }
      33% { transform: translate(10px, -15px) rotate(5deg) scale(1.05); }
      66% { transform: translate(-5px, 10px) rotate(-5deg) scale(0.95); }
      100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    }

    .animate-float-slow {
      animation: float 8s ease-in-out infinite;
    }

    .animate-float-medium {
      animation: float 6s ease-in-out infinite reverse;
    }

    .animate-float-fast {
      animation: float 4s ease-in-out infinite;
    }
    
    .animate-float-variable {
      animation: float 7s ease-in-out infinite alternate;
    }
  `]
})
export class AnimatedServicesCardComponent {}
