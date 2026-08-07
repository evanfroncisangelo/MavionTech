import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  scrollTo(href: string) {
    this.mobileOpen.set(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
