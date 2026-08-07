import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  services = [
    'Custom Software', 'Web Applications', 'Cloud Solutions', 'AI-Enabled Solutions', 'Integrations', 'Mobile Applications', 'Data Analytics', 'UI/UX Design', 'DevOps & Automation', 'Maintenance & Support'
  ];

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}

