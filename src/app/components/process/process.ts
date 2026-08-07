import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class Process {
  steps = [
    { num: '01', icon: '🔍', title: 'Discovery', desc: 'We dive deep into your business goals, user needs, and technical requirements to build a solid foundation.' },
    { num: '02', icon: '📐', title: 'Planning', desc: 'Architecture design, project roadmap, sprint planning, and resource allocation for a smooth journey.' },
    { num: '03', icon: '🛠️', title: 'Development', desc: 'Agile sprints with clean, tested, documented code. Regular demos keep you in the loop.' },
    { num: '04', icon: '🧪', title: 'Testing', desc: 'Automated unit tests, integration tests, QA review, and performance benchmarking.' },
    { num: '05', icon: '🚀', title: 'Deployment', desc: 'Zero-downtime deployments via CI/CD pipelines to your chosen cloud infrastructure.' },
    { num: '06', icon: '🛡️', title: 'Support', desc: 'Ongoing maintenance, monitoring, feature enhancements, and dedicated support after launch.' },
  ];
}
