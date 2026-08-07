import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  values = ['Transparency', 'Quality First', 'Collaboration', 'Innovation', 'Reliability'];

  mission = [
    { icon: '🎯', title: 'Our Mission', desc: 'To design, build, and scale digital products that help businesses innovate, streamline operations, and accelerate growth.' },
    { icon: '🤝', title: 'Built on Friendship', desc: 'Founded on friendship and collaboration — senior engineers who have worked together and share a passion for great software.' },
    { icon: '🏭', title: 'Industry Depth', desc: 'Delivered software across finance, insurance, gaming, enterprise services, and digital platforms.' },
    { icon: '🌍', title: 'Who We Serve', desc: 'We partner with startups, SMEs, and enterprises to create reliable, scalable, and future-ready solutions.' },
  ];
}
