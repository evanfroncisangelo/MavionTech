import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {
  categories = [
    {
      name: 'Frontend',
      techs: [
        { icon: '⚛️', name: 'React' }, { icon: '⬛', name: 'Next.js' },
        { icon: '🅰️', name: 'Angular' }, { icon: '💚', name: 'Vue.js' },
        { icon: '📘', name: 'TypeScript' }, { icon: '🟨', name: 'JavaScript' },
        { icon: '🧩', name: 'Web Components' },
      ],
    },
    {
      name: 'Backend',
      techs: [
        { icon: '🔷', name: '.NET' }, { icon: '🟢', name: 'Node.js' },
        { icon: '☕', name: 'Java Spring Boot' }, { icon: '🐘', name: 'PHP Laravel' },
        { icon: '⚡', name: 'Express' }, { icon: '🎯', name: 'Hapi.js' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      techs: [
        { icon: '🔵', name: 'Azure' }, { icon: '🟠', name: 'AWS' },
        { icon: '🐳', name: 'Docker' }, { icon: '🐙', name: 'GitHub Actions' },
        { icon: '🔧', name: 'Azure Pipelines' }, { icon: '🔄', name: 'CI/CD' },
      ],
    },
    {
      name: 'Data',
      techs: [
        { icon: '🗄️', name: 'SQL Server' }, { icon: '🐬', name: 'MySQL' },
        { icon: '🐘', name: 'PostgreSQL' }, { icon: '🍃', name: 'MongoDB' },
        { icon: '📊', name: 'GraphQL' },
      ],
    },
    {
      name: 'AI & Automation',
      techs: [
        { icon: '🤖', name: 'AI Workflows' }, { icon: '⚙️', name: 'Business Automation' },
        { icon: '🔗', name: 'Intelligent Integrations' }, { icon: '💡', name: 'Productivity Solutions' },
      ],
    },
  ];
}
