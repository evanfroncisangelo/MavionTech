import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUs {
  reasons = [
    { icon: '🏆', title: 'Experienced Professionals', desc: 'Senior engineers with 8–10+ years in their domains — full stack developers, technical leads, and solution builders with real production experience.' },
    { icon: '⚡', title: 'Modern Technology Stack', desc: 'We use the latest, battle-tested tools across frontend, backend, cloud, data, and AI — no legacy baggage.' },
    { icon: '🔄', title: 'Agile Delivery', desc: 'Regular demos, transparent communication, and iterative sprints keep you in control at every stage of the project.' },
    { icon: '📈', title: 'Scalable Architecture', desc: 'We design systems for growth — finance, insurance, gaming, and enterprise platforms that handle real-world demand.' },
  ];

  stats = [
    { val: '8+', label: 'Years Experience' },
    { val: '3', label: 'Expert Engineers' },
    { val: '5', label: 'Industries Served' },
    { val: '8', label: 'Core Services' },
  ];
}
