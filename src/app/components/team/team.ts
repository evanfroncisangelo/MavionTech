import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  team = [
    {
      avatar: '👨‍🔬', name: 'Adamson Vispo', role: 'Senior Full Stack Developer / Frontend Lead',
      bio: '10+ Expert full-stack engineer and frontend lead with deep experience in React, Next.js, Node.js, Java Spring Boot, and enterprise banking platforms.',
      skills: ['React', 'Next.js', 'Node.js', 'Java Spring Boot', 'Docker'],
      gradient: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)',
      linkedin: 'https://linkedin.com/in/adamson-vispo',
    },
    {
      avatar: '👨‍🏗️', name: 'Joshua Kyle Malitig', role: 'System Development Lead',
      bio: '9+ years leading system development and teams — specializing in Laravel, PHP, Vue, AWS, WordPress, DevOps, and full-cycle project management.',
      skills: ['Laravel', 'PHP', 'Vue.js', 'AWS', 'DevOps'],
      gradient: 'linear-gradient(135deg,#FFF7ED,#FED7AA)',
      linkedin: 'https://linkedin.com/in/kyle-malitig',
    },
    {
      avatar: '👨‍💻', name: 'Evan Mancenon', role: 'Senior Software Engineer',
      bio: '8+ years building enterprise systems, APIs, and microservices on .NET, Angular, and Azure — with deep expertise in insurance & benefits platforms.',
      skills: ['.NET', 'Angular', 'Azure', 'Microservices', 'APIs'],
      gradient: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)',
      linkedin: 'https://linkedin.com/in/evan-froncis-angelo-mancenon',
    }
  ];
}
