import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      icon: '💻', bg: '#EFF6FF', title: 'Custom Software Development',
      desc: 'Bespoke software solutions built around your unique business processes, workflows, and growth objectives.',
      features: ['Requirements analysis', 'Architecture design', 'Agile delivery'],
    },
    {
      icon: '🌐', bg: '#F0FDFA', title: 'Web Application Development',
      desc: 'High-performance web applications using modern frameworks — from MVPs to large-scale enterprise platforms.',
      features: ['React / Angular / Vue', 'RESTful & GraphQL APIs', 'Performance optimization'],
    },
    {
      icon: '☁️', bg: '#F0F9FF', title: 'Cloud Solutions',
      desc: 'Scalable cloud infrastructure design, migration, and management on Azure and AWS.',
      features: ['Azure & AWS architecture', 'Cloud migration', 'Cost optimization'],
    },
    {
      icon: '🤖', bg: '#FDF4FF', title: 'AI-Enabled Business Solutions',
      desc: 'Intelligent integrations and AI-assisted workflows that automate operations and boost team productivity.',
      features: ['AI-assisted workflows', 'Business automation', 'Intelligent integrations'],
    },
    {
      icon: '🏢', bg: '#FFF7ED', title: 'Enterprise Systems',
      desc: 'Robust enterprise-grade platforms with deep experience in finance, insurance, banking, and gaming domains.',
      features: ['Enterprise architecture', 'Legacy modernization', 'Microservices'],
    },
    {
      icon: '⚙️', bg: '#F0FDF4', title: 'DevOps & Automation',
      desc: 'Automated CI/CD pipelines, containerization, and infrastructure as code to ship faster and more reliably.',
      features: ['Docker & Kubernetes', 'GitHub Actions / Azure Pipelines', 'Monitoring & alerting'],
    },
    {
      icon: '🔗', bg: '#FFFBEB', title: 'System Integrations',
      desc: 'Seamless integration between your existing systems, third-party services, and new platforms.',
      features: ['API & webhook integrations', 'Data synchronization', 'Legacy system connectivity'],
    },
    {
      icon: '🤝', bg: '#FDF2F8', title: 'Technical Consulting',
      desc: 'Strategic technology guidance to evaluate your stack, plan your roadmap, and align IT with business goals.',
      features: ['Tech stack evaluation', 'Architecture review', 'Team augmentation'],
    },
  ];
}
