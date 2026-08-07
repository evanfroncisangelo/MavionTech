import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = new Date().getFullYear();

  socials = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
    { name: 'GitHub', icon: '🐙', href: 'https://github.com' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com' },
  ];

  serviceLinks = [
    'Custom Software Development', 'Web Application Development', 'Cloud Solutions',
    'AI-Enabled Business Solutions', 'Enterprise Systems', 'DevOps & Automation',
    'System Integrations', 'Technical Consulting',
  ];

  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
    // Future: { label: 'Blog', href: '/blog' },
    // Future: { label: 'Case Studies', href: '/portfolio' },
  ];
}
